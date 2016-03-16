const template = `<section class="col-sm-8" ng-switch="viewStatus">
						<div ng-switch-when="READY">
							<div class="list-group" ng-show="!!flights.length">
								<a class="list-group-item" ng-click="detailView = !detailView" ng-repeat="flight in flights">
									<span class="badge">{{stripCurrency(flight.price) | currency:"€"}}</span>
									<dl class="dl-horizontal">
										<dt>Departure</dt>
										<dd>{{getDate(firstLegDep(flight))}}</dd>
										<dt>Arrival</dt>
										<dd>{{getDate(lastLegArr(flight))}}</dd>
										<dt>Stops</dt>
										<dd>{{totalLegs(flight) - 1}}</dd>
									</dl>
									<div ng-show="detailView" ng-repeat="segment in flight.segments">
										<h4>{{segment.flightNumber}} <small>{{segment.carrier}}</small></h4>
										<table class="table">
											<tr>
												<th>Leg</th>
												<th>Departure</th>
												<th>Arrival</th>
											</tr>
											<tr ng-repeat="leg in segment.legs">
												<td>{{leg.origin}} to {{leg.destination}}</td>
												<td>{{getDateTime(leg.departure)}}</td>
												<td>{{getDateTime(leg.arrival)}}</td>
											</tr>
										</table>
									</div>
								</a>
							</div>
							<h2 ng-show="flights.length == 0">No flights found.</h2>
						</div>
						<div ng-switch-when="ERROR">
							<h2>Error :(</h2>
						</div>
					</section>
`;

export default template;
