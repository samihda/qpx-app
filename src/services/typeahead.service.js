import 'typeahead.js/dist/typeahead.jquery.min.js';
import list from 'json!airport-codes/airports.json';

const airports = list.filter(obj => obj.iata !== '')
					.map(obj => {
						const { iata, city, name } = obj;
						return `${iata} - ${name}, ${city}`;
					})
					.sort();

const options = {
	highlight: true,
	hint: true,
	minLength: 1
};

const dataset = {
	limit: 10,
	name: 'airports',
	source: matcher(airports)
};

function matcher(arr) {
	return function findMatches(q, cb) {
		const substrRegex = new RegExp(q, 'i');
		let matches = [];
		let secondaryMatches = [];

		for (let i = 0, len = arr.length; i < len; i++) {
			if (substrRegex.test(arr[i].slice(0, 3))) {
				matches.push(arr[i]);
			}

			if (substrRegex.test(arr[i].slice(4))) {
				secondaryMatches.push(arr[i]);
			}
		}

		const suggestions = matches.concat(secondaryMatches);

		cb(suggestions);
	}
}

function typeaheadService($) {
	return {
		setTypeahead(selector) {
			return $(selector).typeahead(options, dataset)
				.on('typeahead:select', (event, selection) => {
					$(selector).typeahead('val', selection.slice(0,3));
				});
		}
	};
}


typeaheadService.$inject = ['$'];

export default typeaheadService;
