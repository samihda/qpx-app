const template = `<section class="col-sm-8" ng-switch="viewStatus">
						<div ng-switch-when="READY">
							<div class="list-group" ng-show="!!flights.length">
								<button type="button" class="list-group-item" ng-click="detailView = !detailView" ng-repeat="flight in flights">
									<span class="badge">{{stripCurrency(flight.price) | currency:"€"}}</span>
									<dl class="dl-horizontal">
										<dt>Departure</dt>
										<dd>{{firstLegDep(flight) | date: 'd MMMM yyyy h:mm a'}}</dd>
										<dt>Arrival</dt>
										<dd>{{lastLegArr(flight) | date: 'd MMMM yyyy h:mm a'}}</dd>
										<dt>Stops</dt>
										<dd>{{totalLegs(flight) - 1}}</dd>
									</dl>
									<div ng-show="detailView" ng-repeat="segment in flight.segments">
										<h4>{{segment.flightNumber}} <small>{{segment.carrier}}</small></h4>
										<table class="table">
											<tr ng-repeat="leg in segment.legs">
												<td>{{leg.origin}}</td>
												<td><p class="text-muted">{{leg.departure | date: "d MMM h:mm a"}}</p></td>
												<td><span class="glyphicon glyphicon-arrow-right"></span></td>
												<td>{{leg.destination}}</td>
												<td><p class="text-muted">{{leg.arrival | date: "d MMM h:mm a"}}</p></td>
											</tr>
										</table>
									</div>
								</button>
							</div>
							<h2 ng-show="flights.length == 0">No flights found.</h2>
						</div>
						<div ng-switch-when="ERROR">
							<h2>Error :(</h2>
						</div>
					</section>
`;

export default template;
/*`<div ng-show="detailView" ng-repeat="segment in flight.segments">
	<h4>{{segment.flightNumber}} <small>{{segment.carrier}}</small></h4>
	<table class="table">
		<tr>
			<th>Leg</th>
			<th>Departure</th>
			<th>Arrival</th>
		</tr>
		<tr ng-repeat="leg in segment.legs">
			<td>{{leg.origin}} - {{leg.destination}}</td>
			<td>{{leg.departure | date: "d MMM h:mm a"}}</td>
			<td>{{leg.arrival | date: "d MMM h:mm a"}}</td>
		</tr>
	</table>
</div>`*/