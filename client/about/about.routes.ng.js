'use strict'

angular.module('animateJstestApp')
.config(function($stateProvider) {
  $stateProvider
  .state('about', {
    url: '/about',
    templateUrl: 'client/about/about.view.ng.html',
    controller: 'AboutCtrl'
  });
});