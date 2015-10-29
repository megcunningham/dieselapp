angular
.module('dieselApp')

// fetching django data

.factory('Pump', function($http, Backend) {
	console.log('Backend', Backend)
	
	this.getArms = function () {
		return $http.get(Backend.url + '/arms')
		.then(function(data) {
				console.log('Got some data: ', data);
				return data;
			});
	};
	return this;
	});


// .factory('Pump', function ($http, backend) {
// 	var factory = [];
// 			factory.getArms = function() {
// 				$http({
// 					url: 'backend' + 'arms',
// 					method: 'GET'
// 				})
// 				.then(function successCallback(response) {
// 					factory.getArms = response;
// 				}, function errorCallback(response) {
// 					factory.getArms = response;
// 				});
//
// 				return factory.getArms;
// 			};
//
// 			return factory;
// 		});
					
			
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
	