angular
  .module('dieselApp')

  .config(function($stateProvider, $urlRouterProvider, $httpProvider) {
	$httpProvider.defaults.withCredentials = true;
    $stateProvider
       .state('login', {
          url: "/login",
            templateUrl:'templates/login-reg.html',
            controller: 'AuthCtrl',
            controllerAs: 'auth'
      })
	   .state('landing', {
		 url: "/landing",
		   templateUrl: 'templates/landing.html',
		   controller: 'landingCtrl'
	   })
      .state('index', {
        url: "/index",
          templateUrl: 'templates/trainingIndex.html',
          controller: 'trainingIndexCtrl',
      }) 
	   .state('weekly', {
		 url: "/weekly",
		   templateUrl: 'templates/weeklyWorkout.html',
		   controller: 'weeklyCtrl'
	   })  
       .state('armPage', {
         url: "/arms",
           templateUrl:'templates/armPage.html',
           controller: 'ArmCtrl',
           controllerAs: 'arm'
        })

      // .when('/backlist', {
      //   templateUrl:'www/templates/backPage.html',
      //   controller: 'BackCtrl',
      //   controllerAs: 'back'
      // })

      // .when('/chestlist', {
      //   templateUrl:'www/templates/chestPage.html',
      //   controller: 'ChestCtrl',
      //   controllerAs: 'chest'
      // })

      // .when('/leglist', {
      //   templateUrl:'www/templates/legPage.html',
      //   controller: 'LegCtrl',
      //   controllerAs: 'leg'
      // })

      // .when('/shoulderlist', {
      //   templateUrl:'www/templates/shoulderPage.html',
      //   controller: 'ShoulderCtrl',
      //   controllerAs: 'shoulder'
      // });

    });