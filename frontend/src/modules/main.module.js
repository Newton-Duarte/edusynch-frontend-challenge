import './landing.module';

export const MAIN_MODULE = angular.module('main.module', ['landing.module'])

MAIN_MODULE.config(function($stateProvider) {
  var landingState = {
    name: 'landing',
    url: '/',
    component: 'landingComponent'
  }

  var dashboardState = {
    name: 'dashboard',
    url: '/dashboard',
    component: 'dashboardComponent',
    lazyLoad: async ($transition$) => {
      const $ocLazyLoad = $transition$.injector().get('$ocLazyLoad');
      const mod = await import(/* webpackChunkName: 'dashboard' */ '../components/dashboard/dashboard.component');
      $ocLazyLoad.load(mod.DASHBOARD_MODULE);
    }
  }

  $stateProvider.state(landingState);
  $stateProvider.state(dashboardState);
});