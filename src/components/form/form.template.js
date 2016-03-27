const template = `<section class="col-sm-4">
					<form novalidate class="form-horizontal" name="searchForm" ng-submit="form.submit()">
						<div class="form-group">
							<label for="inputOrigin" class="col-sm-4 control-label">From</label>
							<div class="col-sm-8">
								<input id="inputOrigin"
										class="form-control"
										type="text"
										placeholder="try “LAX”" 
										ng-model="form.model.origin"
										uib-typeahead="airport for airport in form.searchAirport($viewValue) | limitTo:10"
								>
							</div>
						</div>

						<div class="form-group">
							<label for="inputDestination" class="col-sm-4 control-label">To</label>
							<div class="col-sm-8">
								<input id="inputDestination"
										class="form-control"
										type="text"
										placeholder="try “JFK”" 
										ng-model="form.model.destination"
										uib-typeahead="airport for airport in form.searchAirport($viewValue) | limitTo:10"
								>
							</div>
						</div>

						<div class="form-group">
							<label for="inputDate" class="col-sm-4 control-label">Departure</label>
							<div class="col-sm-8">
							    <input id="inputDate"
							    		type="text" 
							    		uib-datepicker-popup
							    		class="form-control" 
							    		ng-model="form.model.date" 
							    		is-open="form.dp.isOpen" 
							    		ng-click="form.dp.open()" 
							    		show-button-bar="false" 
							    		required>
							</div>
						</div>

						<p class="text-right"><a href="#" ng-click="options=true" ng-hide="options">More</a></p>
						
						<div class="form-group" ng-show="options">
							<label for="inputPassengers" class="col-sm-4 control-label">Passengers</label>
							<div class="col-sm-8">
								<select id="inputPassengers" class="form-control" ng-model="form.model.passengers">
									<option ng-repeat="n in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" ng-selected="n == form.model.passengers" value="n">
										{{n}}
									</option>
								</select>
							</div>
						</div>
						
						<div class="form-group" ng-show="options">
							<label for="inputMaxPrice" class="col-sm-4 control-label">Budget</label>
							<div class="col-sm-8">
								<div class="input-group">
									<span class="input-group-addon">€</span>
									<input id="inputMaxPrice"
											class="form-control" 
											type="text" 
											ng-model="form.model.maxPrice" 
											ng-pattern="form.pattern.budget" 
											placeholder="e.g. “1000”">
								</div>
							</div>
						</div>

						<p class="text-right"><a href="#" ng-click="options=false" ng-show="options">Less</a></p>
						
						<hr>

						<div class="pull-right">
							<input type="reset" class="btn btn-default" ng-click="form.reset()">
							<input type="submit" class="btn btn-primary" ng-disabled="!searchForm.$valid" value="Search">
						</div>
					</form>
				</section>
`;

export default template;
