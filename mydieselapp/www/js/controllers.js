angular
  .module('dieselApp')

// controllers - factory cb to be viewed

.controller('MainCtrl', function ($scope, $ionicScrollDelegate) {
  $scope.scrollMainToTop = function() {
    $ionicScrollDelegate.$getByHandle('mainScroll').scrollTop([shouldAnimate]);
  }
})

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

  getData();

  vm.searchNames = function(workout) {
    if (vm.shownGroup && vm.shownGroup.workout_name && vm.isGroupShown(workout)) {
      vm.shownGroup = null;
    } else {
      vm.shownGroup = workout;
    }
  };

  vm.isGroupShown = function(workout) {
    if(workout && vm.shownGroup && vm.shownGroup.workout_name) {
      return vm.shownGroup.workout_name === workout.workout_name;
    } else { return false; }
  };

  function getData() {
    Pump.getNames()
      .then(function(response) {
        vm.Search = response.data;
        console.log('response', response)
      });
    vm.showExercises = true;
  };
  vm.searchNames();
})

.controller('ArmCtrl', function(Pump, $scope, $ionicHistory) {
    $scope.myGoBack = function() {
      console.log('click');
      $ionicHistory.goBack();
    };

  var vm = this;

  getData();

   vm.deezArms = function (workout) {
     if (vm.shownGroup && vm.shownGroup.workout_name && vm.isGroupShown(workout)) {
       vm.shownGroup = null;
     } else {
       vm.shownGroup = workout;
     }
   };

   vm.isGroupShown = function(workout) {
     if(workout && vm.shownGroup && vm.shownGroup.workout_name) {
       return vm.shownGroup.workout_name === workout.workout_name;
     } else { return false; }
   };

  function getData() {
    Pump.getArms()
    .then(function(response) {
      vm.Arms = response.data;
      console.log('response', response)
    });
  };
})

.controller('BackCtrl', function(Pump, $scope) {
     var vm = this;

     getData();

     vm.datBack = function (workout) {
     if (vm.shownGroup && vm.shownGroup.workout_name && vm.isGroupShown(workout)) {
       vm.shownGroup = null;
     } else {
       vm.shownGroup = workout;
     }
   };

   vm.isGroupShown = function(workout) {
     if(workout && vm.shownGroup && vm.shownGroup.workout_name) {
       return vm.shownGroup.workout_name === workout.workout_name;
     } else { return false; }
   };

    function getData() {
     	Pump.getBack()
			.then(function(response) {
				vm.Back = response.data;
				console.log('response', response)
			});
	 }
})

.controller('ChestCtrl', function(Pump, $scope) {
     var vm = this;

     getData();

     vm.disChest = function (workout) {
       if (vm.shownGroup && vm.shownGroup.workout_name && vm.isGroupShown(workout)) {
         vm.shownGroup = null;
       } else {
         vm.shownGroup = workout;
       }
     };

     vm.isGroupShown = function(workout) {
       if(workout && vm.shownGroup && vm.shownGroup.workout_name) {
         return vm.shownGroup.workout_name === workout.workout_name;
       } else { return false; }
     };

    function getData() {
	  	Pump.getChest()
			.then(function(response) {
				vm.Chest = response.data;
				console.log('response', response)
			});
	 }
})

.controller('LegCtrl', function(Pump, $scope) {
     var vm = this;

     getData();
     vm.demLegs = function (workout) {
       if (vm.shownGroup && vm.shownGroup.workout_name && vm.isGroupShown(workout)) {
         vm.shownGroup = null;
       } else {
         vm.shownGroup = workout;
       }
     };

     vm.isGroupShown = function(workout) {
       if(workout && vm.shownGroup && vm.shownGroup.workout_name) {
         return vm.shownGroup.workout_name === workout.workout_name;
       } else { return false; }
     };

    function getData() {
	  	Pump.getLegs()
			.then(function(response) {
				vm.Legs = response.data;
				console.log('response', response)
			});
	 }
})

.controller('ShoulderCtrl', function(Pump, $scope) {
     var vm = this;

     getData();

     vm.doesShoulders = function (workout) {
       if (vm.shownGroup && vm.shownGroup.workout_name && vm.isGroupShown(workout)) {
         vm.shownGroup = null;
       } else {
         vm.shownGroup = workout;
       }
     };

     vm.isGroupShown = function(workout) {
       if(workout && vm.shownGroup && vm.shownGroup.workout_name) {
         return vm.shownGroup.workout_name === workout.workout_name;
       } else { return false; }
     };

    function getData() {
	  	Pump.getShoulders()
			.then(function(response) {
				vm.Shoulders = response.data;
				console.log('response', response)
			});
	 }
 })
