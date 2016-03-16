import angular from 'angular';
import flightsForm from './form.directive';
import dataService from '../../services/data.service';
import datepicker from 'angular-ui-bootstrap/src/datepicker';

const form = 'form';

angular
	.module(form, [datepicker])
	.factory('dataService', dataService)
	.directive('flightsForm', flightsForm);

export default form;
