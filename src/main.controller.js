import * as actions from './actions';

export default class MainCtrl {
	constructor($ngRedux, $scope) {
		let unsubscribe = $ngRedux.connect(this.mapState, actions)(this);
		$scope.$on('$destroy', unsubscribe);
		this.flights = [];
	}

	mapState(state) {
		return {
			viewStatus: state.statusMessage,
			flights: state.flights
		};
	}
}

MainCtrl.$inject = ['$ngRedux', '$scope'];
