function ListCtrl($scope) {
	$scope.firstLegDep = function (flight) {
		return flight.segments[0].legs[0].departure;
	};

	$scope.lastLegArr = function (flight) {
		const segsLen = flight.segments.length;
		const legsLen = flight.segments[segsLen - 1].legs.length;

		return flight
			.segments[segsLen - 1]
			.legs[legsLen - 1]
			.arrival;
	};

	$scope.totalLegs = function (flight) {
		return flight.segments.map((s) => {
			return s.legs.length;
		}).reduce((a, b) => a + b);
	};
	
	$scope.stripCurrency = function (str) {
		return str.slice(3);
	};
}

ListCtrl.$inject = ['$scope'];

export default ListCtrl;
