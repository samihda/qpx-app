import FormCtrl from './form.controller';
import template from './form.template';

function formDirective() {
	return {
		restrict: 'A',
		controller: FormCtrl,
		controllerAs: 'form',
		replace: true,
		template: template
	}
}

export default formDirective;
