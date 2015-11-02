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
// 	vm.weeklyWorkouts = function() {
// 		Pump.
// 	}
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
     	var data = Pump.getBack();
     	vm.back = data.val()
     }

      vm.listBack = function() {
          var ref = new Firebase('https://mobiletrainerapp.firebaseio.com/admin/users/targetgroup/back');

          ref.once('value', function(dataSnapshot) {
               vm.completeBackObj = dataSnapshot.val();   
          });
     }

})

.controller('ChestCtrl', function(Pump, $scope) {
     var vm = this;

     vm.disChest = function () {
     	var data = Pump.getChest();
     	vm.chest = data.val()
     }

     vm.listChest = function() {
          var ref = new Firebase('https://mobiletrainerapp.firebaseio.com/admin/users/targetgroup/chest');

          ref.once('value', function(dataSnapshot) {
               vm.completeChestObj = dataSnapshot.val();   
          });
     }

})

.controller('LegCtrl', function(Pump, $scope) {
     var vm = this;

     vm.demLegs = function () {
     	var data = Pump.getLegs();
     	vm.legs = data.val()
     }

      vm.listLegs = function() {
          var ref = new Firebase('https://mobiletrainerapp.firebaseio.com/admin/users/targetgroup/legs');

          ref.once('value', function(dataSnapshot) {
               vm.completeLegsObj = dataSnapshot.val();   
          });
     }

})

.controller('ShoulderCtrl', function(Pump, $scope) {
     var vm = this;

     vm.doesShoulders = function () {
     	var data = Pump.getShoulders();
     	vm.shoulders = data.val()
     }

     vm.listShoulders = function() {
          var ref = new Firebase('https://mobiletrainerapp.firebaseio.com/admin/users/targetgroup/shoulders');

          ref.once('value', function(dataSnapshot) {
               vm.completeShouldersObj = dataSnapshot.val();   
          });
     }

})