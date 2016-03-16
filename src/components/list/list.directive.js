import ListCtrl from './list.controller';
import template from './list.template';

function listDirective() {
	return {
		restrict: 'A',
		controller: ListCtrl,
		scope: {
			viewStatus: '=',
			flights: '='
		},
		replace: true,
		template: template
	}
}

export default listDirective;
