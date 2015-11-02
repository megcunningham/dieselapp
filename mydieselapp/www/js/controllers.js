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
				vm.Weekly = response;
				console.log('response', response);
			});
	};
	vm.weeklyWorkouts();
})


.controller('ArmCtrl', function(Pump, $scope) {
     var vm = this;
     vm.deezArms = function () { 
     	Pump.getArms()
			.then(function(response) {
				vm.Arms = response;
				console.log('response', response)
			});
     };
	 vm.deezArms();
	 
   //   vm.listArms = function() {
   //     var ref = ('Backend' + 'arms');
   // 	   console.log('i made it this far');
   //     ref.once('value', function(dataSnapshot) {
   //     vm.completeArmsObj = dataSnapshot.val();
   //    });
   // }
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