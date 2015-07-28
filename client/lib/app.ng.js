angular.module('animateJstestApp', [
  'angular-meteor',
  'ui.router',
  'ui.bootstrap',
  'angularUtils.directives.dirPagination',
  'ngAnimate'
]);

onReady = function() {
  angular.bootstrap(document, ['animateJstestApp']);
};
  
if(Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}