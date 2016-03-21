import {
	fetchFlightsRequest,
	fetchFlightsSuccess,
	fetchFlightsFailure
} from '../../actions';

function FormCtrl($ngRedux, typeaheadService, dataService) {
	const inputOrigin = typeaheadService.setTypeahead('#inputOrigin');
	const inputDestination = typeaheadService.setTypeahead('#inputDestination');

	/**
	 * manual, event-based binding
	 */
	inputOrigin.on('input typeahead:select', (e) => { vm.model.origin = e.target.value; });
	inputDestination.on('input typeahead:select', (e) => { vm.model.destination = e.target.value; });

	let vm = this;
	
	/**
	 * set initial values
	 */
	vm.model = {
		origin: '',
		destination: '',
		date: new Date(),
		passengers: 1,
		maxPrice: ''
	};

	vm.pattern = {
		airport: /^[A-Z]{3}$/,
		date: /^201[67]-(0\d|1[012])-([012]\d|3(0|1))$/, // valid until 2017-12-31
		budget: /^$|^[1-9]\d*(\.\d{2})?$/
	};

	/**
	 * datepicker
	 */
	vm.dp = {
		options: {
			minDate: new Date(),
			formatDay: 'dd',
			formatMonth: 'MM',
			formatYear: 'yyyy'
		},
		isOpen: false,
		open() {
			vm.dp.isOpen = true;
		}
	};

	vm.submit = submit;
	vm.reset = reset;

	const init = Object.assign({}, vm.model);

	function reset() {
		vm.model = init;
	}

	function submit() {
		$ngRedux.dispatch(fetchFlightsRequest());
		
		let params = Object.assign({}, vm.model);
		const str = Date.parse(params.date);
		const obj = new Date(str);

		params.date = obj.toISOString().slice(0, 10);
		
		dataService.getFlights(params).then(successCb, errorCb);
	}

	function successCb(res) {
		let arr = [];
		if (res.data.trips.tripOption) {
			arr = parseRes(res);
		}
		
		$ngRedux.dispatch(fetchFlightsSuccess(arr));
	}

	function errorCb(res) {
		$ngRedux.dispatch(fetchFlightsFailure(res.data.error));

		try {
			throw $ngRedux.getState().error.object;
		} catch (e) {
			alert(`Error ${e.code}: ${e.message} (${e.errors[0].reason})`);
		}
	}

	function parseRes(response) {
		const results = response.data.trips.tripOption;
		
		return results.map((item) => {
			return {
				price: item.saleTotal,
				from: response.config.data.request.slice[0].origin,
				to: response.config.data.request.slice[0].destination,
				segments: item.slice[0].segment.map((s) => {
					const legs = s.leg.map((l) => {
						return {
							origin: l.origin,
							destination: l.destination,
							arrival: l.arrivalTime,
							departure: l.departureTime
						}
					});

					return {
						carrier: (() => {
							const arr = response.data.trips.data.carrier.filter(c => c.code === s.flight.carrier);
							return arr[0].name;
						})(),
						flightNumber: s.flight.carrier + s.flight.number,
						legs
					};
				})
			};
		});
	}
}

FormCtrl.$inject = ['$ngRedux', 'typeaheadService', 'dataService'];

export default FormCtrl;
