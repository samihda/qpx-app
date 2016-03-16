import reducer from './reducers';

function mainConfig($ngReduxProvider) {
	$ngReduxProvider.createStoreWith(reducer);
}

export default mainConfig;
