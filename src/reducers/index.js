import { INIT, ERROR } from '../actions/status.messages';
import {
	FETCH_FLIGHTS_REQUEST,
	FETCH_FLIGHTS_SUCCESS,
	FETCH_FLIGHTS_FAILURE
} from '../actions/action.types';

const initialState = {
	flights: [],
	search: {},
	statusMessage: INIT,
	error: {
		value: false,
		object: null
	}
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_FLIGHTS_REQUEST:
			return Object.assign({}, initialState, {
				statusMessage: action.payload.status
			});
		case FETCH_FLIGHTS_SUCCESS:
			return Object.assign({}, initialState, {
				statusMessage: action.payload.status,
				flights: action.payload.flights
			});
		case FETCH_FLIGHTS_FAILURE:
			return Object.assign({}, initialState, {
				statusMessage: ERROR,
				error: {
					value: action.error,
					object: action.payload
				}
			});
		default:
			return state;
	}
}

export default reducer;
