import angular from 'angular';
import flightsList from './list.directive';

const list = 'list';

angular
	.module(list, [])
	.directive('flightsList', flightsList);

export default list;
