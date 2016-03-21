import $ from 'jquery';
import angular from 'angular';
import flightsForm from './form.directive';
import typeaheadService from '../../services/typeahead.service';
import dataService from '../../services/data.service';
import datepicker from 'angular-ui-bootstrap/src/datepicker';

const form = 'form';

angular
	.module(form, [datepicker])
	.constant('$', $)
	.factory('typeaheadService', typeaheadService)
	.factory('dataService', dataService)
	.directive('flightsForm', flightsForm);

export default form;
