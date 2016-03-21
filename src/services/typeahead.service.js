import 'typeahead.js/dist/typeahead.jquery.min.js';
import list from 'json!airport-codes/airports.json';

function matcher(arr) {
	return function findMatches(q, cb) {
		const substrRegex = new RegExp(q, 'i');
		let matches = [];
		let secondaryMatches = [];

		arr.forEach((val, idx, arr) => {
			if (substrRegex.test(val.slice(0, 3))) {
				matches.push(val);
			}

			if (substrRegex.test(val.slice(4))) {
				secondaryMatches.push(val);
			}
		});

		const suggestions = matches.concat(secondaryMatches);

		cb(suggestions);
	}
}

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
