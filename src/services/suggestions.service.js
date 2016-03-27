import list from 'json!airport-codes/airports.json';

const rgx = new RegExp(/^[A-Z0-9]{3}$/);
const airports = list.filter(obj => rgx.test(obj.iata))
					.map(obj => {
						const { iata, city, name } = obj;
						return `${iata} - ${name}, ${city}`;
					})
					.sort();

function getAirports() {
	return airports;
}

function filterAirports(str) {
	const rgx = new RegExp(str, 'i');
	let matches = [];
	let secondaryMatches = [];

	for (let i = 0, len = airports.length; i < len; i++) {
		if (rgx.test(airports[i].slice(0, 3))) {
			matches.push(airports[i]);
		}

		if (rgx.test(airports[i].slice(4))) {
			secondaryMatches.push(airports[i]);
		}
	}

	return matches.concat(secondaryMatches);
}

export default function suggestionsService() {
	return {
		getAirports,
		filterAirports
	}
}
