import keyMirror from 'keymirror';

const actionTypes = keyMirror({
	FETCH_FLIGHTS_REQUEST: null,
	FETCH_FLIGHTS_SUCCESS: null,
	FETCH_FLIGHTS_FAILURE: null
});

export const {
	FETCH_FLIGHTS_REQUEST,
	FETCH_FLIGHTS_SUCCESS,
	FETCH_FLIGHTS_FAILURE
} = actionTypes;
