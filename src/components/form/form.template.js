const template = `<section class="col-sm-4">
					<form novalidate class="form-horizontal" name="searchForm" ng-submit="form.submit()">
						<div class="form-group" ng-class="{'has-error': searchForm.origin.$dirty && searchForm.origin.$invalid}">
							<label for="inputOrigin" class="col-sm-4 control-label">From</label>
							<div class="col-sm-8">
								<input id="inputOrigin"
										name="origin"
										class="form-control"
										type="text"
										placeholder="try “LAX”" 
										aria-describedby="inputOriginHelp"
										ng-model="form.model.origin"
										ng-pattern="form.pattern.airport"
										uib-typeahead="airport for airport in form.searchAirport($viewValue) | limitTo:10"
										required
								>
								<span id="inputOriginHelp" class="help-block" ng-show="searchForm.origin.$dirty && searchForm.origin.$invalid">Please select an airport</span>
							</div>
						</div>

						<div class="form-group" ng-class="{'has-error': searchForm.destination.$dirty && searchForm.destination.$invalid}">
							<label for="inputDestination" class="col-sm-4 control-label">To</label>
							<div class="col-sm-8">
								<input id="inputDestination"
										name="destination"
										class="form-control"
										type="text"
										placeholder="try “JFK”" 
										aria-describedby="inputDestinationHelp"
										ng-model="form.model.destination"
										ng-pattern="form.pattern.airport"
										uib-typeahead="airport for airport in form.searchAirport($viewValue) | limitTo:10"
										required
								>
								<span id="inputDestinationHelp" class="help-block" ng-show="searchForm.destination.$dirty && searchForm.destination.$invalid">Please select an airport</span>
							</div>
						</div>

						<div class="form-group" ng-class="{'has-error': searchForm.date.$dirty && searchForm.date.$invalid}">
							<label for="inputDate" class="col-sm-4 control-label">Departure</label>
							<div class="col-sm-8">
								<div class="input-group">
								    <input id="inputDate"
								    		name="date"
								    		class="form-control" 
								    		type="text" 
											aria-describedby="inputDateHelp"
								    		ng-model="form.model.date" 
								    		uib-datepicker-popup="d MMMM yyyy"
								    		datepicker-options="form.dp.options"
								    		is-open="form.dp.isOpen" 
								    		show-button-bar="false" 
								    		required
								    >
								    <span class="input-group-btn">
								    	<button type="button" class="btn btn-default" ng-click="form.dp.open()"><span class="glyphicon glyphicon-calendar"></span></button>
								    </span>
								</div>
								<span id="inputDateHelp" class="help-block" ng-show="searchForm.date.$dirty && searchForm.date.$invalid">Please enter a valid date</span>
							</div>
						</div>

						<p class="text-right"><a href="#" ng-click="options=true" ng-hide="options">More</a></p>
						
						<div class="form-group" ng-show="options">
							<label for="inputPassengers" class="col-sm-4 control-label">Passengers</label>
							<div class="col-sm-8">
								<select id="inputPassengers" class="form-control" ng-model="form.model.passengers">
									<option ng-repeat="n in form.passengerOptions" ng-selected="n == form.model.passengers" value="n">
										{{n}}
									</option>
								</select>
							</div>
						</div>
						
						<div class="form-group" ng-class="{'has-error': searchForm.maxPrice.$invalid}" ng-show="options">
							<label for="inputMaxPrice" class="col-sm-4 control-label">Budget</label>
							<div class="col-sm-8">
								<div class="input-group">
									<span class="input-group-addon">€</span>
									<input id="inputMaxPrice"
											name="maxPrice"
											class="form-control" 
											type="text" 
											aria-describedby="inputMaxPriceHelp"
											ng-model="form.model.maxPrice" 
											ng-pattern="form.pattern.budget" 
											placeholder="e.g. “1000”"
									>
								</div>
								<span id="inputMaxPriceHelp" class="help-block" ng-show="searchForm.maxPrice.$invalid">Please enter a valid number</span>
							</div>
						</div>

						<p class="text-right"><a href="#" ng-click="options=false" ng-show="options">Less</a></p>
						
						<hr>

						<div class="pull-right">
							<button type="button" class="btn btn-default" ng-click="form.reset()">Reset</button>
							<input type="submit" class="btn btn-primary" ng-disabled="!searchForm.$valid" value="Search">
						</div>
					</form>
				</section>
`;

export default template;
