import './dashboard.styles.css';

function dashboardController($http) {
  var vm = this;

  vm.dropdown = false;
  vm.dashboardOpacity = {
    opacity: 1,
    transition: 'opacity .2s',
  };
  
  vm.courses = [];
  vm.skip = 0;
  vm.loading = false;
  vm.noMoreCourses = false;

  vm.openDropdown = function() {
    vm.dropdown = !vm.dropdown;
    vm.dashboardOpacity.opacity = vm.dropdown ? '.2' : '1';
  }

  vm.getCourses = function() {
    if (vm.loading || vm.noMoreCourses) return;

    vm.loading = true;

    setTimeout(() => {
      $http
        .get(`http://localhost:3333/courses?skip=${vm.skip}`)
        .then(response => {
          const items = response.data;

          if (items.length === 0) vm.noMoreCourses = true;

          for (const item of items) {
            vm.courses.push(item);
          }

          vm.skip = vm.courses.length;
          vm.loading = false;
        }, err => {
          console.log(err);
          vm.loading = false;
        });
    }, 1000);
  }

  vm.getCourses();
}

const DASHBOARD_COMPONENT = {
  controller: dashboardController,
  template: require('./dashboard.template.html')
}

export const DASHBOARD_MODULE = angular.module('dashboard.module', [])
  .component('dashboardComponent', DASHBOARD_COMPONENT)
  .directive('infiniteScroll', function () {
    return function (scope, elem, attrs) {
      let raw = elem[0];

      elem.bind('scroll', function() {
        if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
          scope.$apply(attrs.infiniteScroll);
        }
      });
    }
  })
  .directive('starRating', function () {
    return {
      restrict: 'EA',
      replace: true,
      template: require('./dashboard.directive.html'),
      scope: {
        ratingValue: '=',
        max: '='
      },
      link: function (scope, elem, attrs) {
        scope.stars = [];
        for (let i = 0; i < scope.max; i++) {
          scope.stars.push({
            filled: i < scope.ratingValue
          });
        }
      }
    }
  });