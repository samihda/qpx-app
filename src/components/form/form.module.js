import angular from 'angular';
import flightsForm from './form.directive';
import suggestionsService from '../../services/suggestions.service';
import dataService from '../../services/data.service';
import datepicker from 'angular-ui-bootstrap/src/datepicker';
import typeahead from 'angular-ui-bootstrap/src/typeahead';

const form = 'form';

angular
	.module(form, [datepicker, typeahead])
	.factory('suggestionsService', suggestionsService)
	.factory('dataService', dataService)
	.directive('flightsForm', flightsForm);

export default form;
