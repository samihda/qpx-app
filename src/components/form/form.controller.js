import {
	fetchFlightsRequest,
	fetchFlightsSuccess,
	fetchFlightsFailure
} from '../../actions';

function FormCtrl($ngRedux, $filter, suggestionsService, dataService) {
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
		airport: /^[A-Z0-9]{3}/,
		date: /^201[67]-(0\d|1[012])-([012]\d|3(0|1))$/, // valid until 2017-12-31
		budget: /^$|^[1-9]\d*(\.\d+)?$/
	};

	/**
	 * datepicker
	 */
	vm.dp = {
		options: {
			minDate: new Date()
		},
		isOpen: false,
		open() {
			vm.dp.isOpen = true;
		}
	};

	vm.passengerOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	vm.searchAirport = suggestionsService.filterAirports;
	vm.submit = submit;
	vm.reset = reset;

	const init = Object.assign({}, vm.model);

	function reset() {
		vm.model = init;
	}

	function submit() {
		$ngRedux.dispatch(fetchFlightsRequest());
		
		let params = Object.assign({}, vm.model);
		params.date = $filter('date')(params.date, 'yyyy-MM-dd');
		params.origin = params.origin.slice(0, 3);
		params.destination = params.destination.slice(0, 3);

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
							origin: response.data.trips.data.airport.find(i => i.code === l.origin).name,
							destination: response.data.trips.data.airport.find(i => i.code === l.destination).name,
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

FormCtrl.$inject = ['$ngRedux', '$filter', 'suggestionsService', 'dataService'];

export default FormCtrl;
