import angular from 'angular';
import ngRedux from 'ng-redux';
import mainConfig from './main.config';
import MainCtrl from './main.controller';
import form from './components/form/form.module';
import list from './components/list/list.module';

angular
	.module('flights', [ngRedux, form, list])
	.config(mainConfig)
	.controller('MainCtrl', MainCtrl);
