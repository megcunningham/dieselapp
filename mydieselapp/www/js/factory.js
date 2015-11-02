angular
.module('dieselApp')

// fetching django data

.factory('Pump', function($http, Backend) {
	console.log('Backend', Backend)
	
	this.getArms = function () {
	  return $http.get(Backend.url + '/arms');
	};
	
	return this;
	console.log('This', this);
	});
			
			// getBack(cb) {
			// 	$http
			// 		.get(backend + 'back')
			// 		.success(cb)
			// },
		// 	getChest(cb) {
		// 		$http
		// 			.get(backend + 'chest')
		// 			.success(cb)
		// 	},
		// 	getLegs(cb) {
		// 		$http
		// 			.get(backend + 'legs')
		// 			.success(cb)
		// 	},
		//             getShoulders(cb) {
		// 		$http
		// 			.get(backend + 'shoulders')
		// 			.success(cb)
		// 	},
		// 	getWeekly(cb) {
		// 		$http
		// 			.get(backend + 'weekly')
		// 			.success(cb)
		// 	}
		//
		//
		// };
	