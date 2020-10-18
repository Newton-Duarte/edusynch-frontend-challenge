import angular from 'angular';
import '@uirouter/angularjs';
import 'oclazyload';

import './assets/css/global.css';

import './modules/main.module';

let app = angular.module('Eduick', ['ui.router', 'oc.lazyLoad', 'main.module']);

app.config(['$locationProvider', function($locationProvider) {
  $locationProvider.html5Mode(true);
}]);