angular
	.module('dieselApp')

// fetching firebase data

	.factory('Pump', function (backend) {
		return {
			getArms(cb) {
				$http
					.get(backend + 'arms')
					.success(cb)
			},
			getBack(cb) {
				$http
					.get(T_APP + 'targetgroup/back')
					.success(cb)
			},
			getChest(cb) {
				$http
					.get(T_APP + 'targetgroup/chest')
					.success(cb)
			},
			getLegs(cb) {
				$http
					.get(T_APP + 'targetgroup/legs')
					.success(cb)
			},
            getShoulders(cb) {
				$http
					.get(T_APP + 'targetgroup/shoulders')
					.success(cb)
			},
			getWeekly(cb) {
				$http
					.get(backend + 'weekly')
					.success(cb)
			}


		};
	})