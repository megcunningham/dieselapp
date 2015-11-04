angular
.module('dieselApp')

// fetching django data

.factory('Pump', function($http, Backend) {
	console.log('Backend', Backend)
	
	this.getArms = function () {
	  return $http.get(Backend.url + '/arms');
	},
		
	this.getBack = function () {
	  return $http.get(Backend.url + '/back');
	},
	
	this.getChest = function () {
	  return $http.get(Backend.url + '/chest');
	},
	
	this.getLegs = function () {
	  return $http.get(Backend.url + '/legs');
	},
	
	this.getShoulders = function () {
	  return $http.get(Backend.url + '/shoulders');
	},
	
	this.getWeekly = function () {
	  return $http.get(Backend.url + '/weekly_workout');
	},
	
	this.getNames = function () {
	  return $http.get(Backend.url + '/search');
	};
	
	return this;
	})
	