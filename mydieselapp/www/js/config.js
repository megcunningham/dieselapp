angular
  .module('dieselApp')

  .config(function($stateProvider, $urlRouterProvider, $httpProvider) {
	// $httpProvider.defaults.withCredentials = true;
    $stateProvider
       .state('login', {
          url: "/login",
            templateUrl:'templates/login-reg.html',
            controller: 'AuthCtrl',
            controllerAs: 'auth'
      })
	   .state('landing', {
		 url: "/",
		   templateUrl: 'templates/landing.html',
		   controller: 'LandingCtrl'
	  })
      .state('index', {
        url: "/index",
          templateUrl: 'templates/trainingIndex.html',
          controller: 'trainingIndexCtrl',
      }) 
	   .state('weekly', {
		 url: "/weekly",
		   templateUrl: 'templates/weeklyWorkouts.html',
		   controller: 'WeeklyCtrl',
		   controllerAs: 'weekly'
	  })  
       .state('arms', {
         url: "/arms",
           templateUrl:'templates/armPage.html',
           controller: 'ArmCtrl',
           controllerAs: 'arm'
      })
       .state('back', {
          url: "/back",
            templateUrl:'templates/backPage.html',
            controller: 'BackCtrl',
            controllerAs: 'back'
       })
        .state('chest', {
          url: "/chest",
            templateUrl:'templates/chestPage.html',
            controller: 'ChestCtrl',
            controllerAs: 'chest'
       })
        .state('shoulder', {
           url: "/shoulders",
             templateUrl:'templates/shoulderPage.html',
             controller: 'ShoulderCtrl',
             controllerAs: 'shoulders'
       })
        .state('legs', {
           url: "/legs",
             templateUrl:'templates/legPage.html',
             controller: 'LegCtrl',
             controllerAs: 'legs'
         })
	 $urlRouterProvider.otherwise('/');
    });