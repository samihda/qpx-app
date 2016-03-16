import { FETCHING, READY } from './status.messages';
import {
	FETCH_FLIGHTS_REQUEST,
	FETCH_FLIGHTS_SUCCESS,
	FETCH_FLIGHTS_FAILURE
} from './action.types';

export function fetchFlightsRequest() {
	return {
		type: FETCH_FLIGHTS_REQUEST,
		payload: {
			status: FETCHING
		}
	};
}

export function fetchFlightsSuccess(flights) {
	return {
		type: FETCH_FLIGHTS_SUCCESS,
		payload: {
			flights,
			status: READY
		}
	};
}

export function fetchFlightsFailure(obj) {
	return {
		type: FETCH_FLIGHTS_FAILURE,
		payload: obj,
		error: true
	};
}
