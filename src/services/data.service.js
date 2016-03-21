import { key, url, solutions, saleCountry, currency } from './data.service.config';

function dataService($http) {
	return {
		/**
		 * Calls the QPX Express API
		 * @param  {String} options.origin      starting airport code (e.g. 'AAA')
		 * @param  {String} options.destination destination airport code (e.g. 'AAA')
		 * @param  {String} options.date        date string formatted as 'YYYY-MM-DD'
		 * @param  {Number} options.passengers  number of passengers
		 * @param  {String} options.maxPrice    maximum price (e.g. 'EUR200.00' or empty (''))
		 * @return {Promise}                    promise object
		 */
		getFlights({ origin, destination, date, passengers = 1, maxPrice = '' }) {
			const price = maxPrice ? currency + maxPrice : '';

			const data = {
				request: {
					maxPrice: price,
					passengers: { adultCount: passengers },
					slice: [
						{ origin, destination, date }
					],
					saleCountry,
					solutions
				}
			};
			
			return $http.post(url + '?key=' + key, data);
		}
	};
}

dataService.$inject = ['$http'];

export default dataService;
