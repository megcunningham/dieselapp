angular
  .module('dieselApp')

// controllers - placing factory cb to be viewed

.controller('trainingIndexCtrl', function() {
	var vm = this;
})

.controller('LandingCtrl', function() {
	var vm = this;
})

.controller('WeeklyCtrl', function(Pump, $scope) {
	var vm = this;
	vm.weeklyWorkouts = function() {
		Pump.getWeekly()
			.then(function(response) {
				vm.Weekly = response.data;
				console.log('response', response);
			});
	};
	vm.weeklyWorkouts();

  vm.showWeekly = function (workout) {
    vm.seeWorkout = workout;
  };
})

.controller('SearchCtrl', function(Pump, $scope) {
  var vm = this;
  vm.searchNames = function() {
    Pump.getNames()
      .then(function(response) {
        vm.Search = response.data;
        console.log('response', response)
      })
  }
})


.controller('ArmCtrl', function(Pump, $scope) {
     var vm = this;
     vm.deezArms = function () {
     	Pump.getArms()
			.then(function(response) {
				vm.Arms = response.data;
				console.log('response', response)
			});
     };
	 vm.deezArms();

  vm.selectExercise = function (workout) {
    vm.selectedWorkout = workout;
  };

})

.controller('BackCtrl', function(Pump, $scope) {
     var vm = this;
     vm.datBack = function () {
     	Pump.getBack()
			.then(function(response) {
				vm.Back = response;
				console.log('response', response)
			});
	 };
	 vm.datBack();

})

.controller('ChestCtrl', function(Pump, $scope) {
     var vm = this;

     vm.disChest = function () {
	  	Pump.getChest()
			.then(function(response) {
				vm.Chest = response;
				console.log('response', response)
			});
	 };
	 vm.disChest();

})

.controller('LegCtrl', function(Pump, $scope) {
     var vm = this;

     vm.demLegs = function () {
	  	Pump.getLegs()
			.then(function(response) {
				vm.Legs = response;
				console.log('response', response)
			});
	 };
	 vm.demLegs();
})

.controller('ShoulderCtrl', function(Pump, $scope) {
     var vm = this;

     vm.doesShoulders = function () {
	  	Pump.getShoulders()
			.then(function(response) {
				vm.Shoulders = response;
				console.log('response', response)
			});
	 };
	 vm.doesShoulders();

})
