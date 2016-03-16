import keyMirror from 'keymirror';

const statusMessages = keyMirror({
	INIT: null,
	FETCHING: null,
	READY: null,
	ERROR: null
});

export const { INIT, FETCHING, READY, ERROR } = statusMessages;
