import './landing.styles.css';

function landingController($scope) {
  var vm = this;

  vm.role = 'teacher';
  vm.modalMenu = false;
  vm.modalLogin = false;
  vm.username = '';
  vm.password = '';

  $scope.$watch(() => vm.role, function(newRole) {
    console.log('Role was changed to ' + newRole);
  });

  vm.openModalLogin = function() {
    vm.modalLogin = true;
  };

  vm.closeModalLogin = function() {
    vm.modalLogin = false;
    vm.username = '';
    vm.password = '';
  };

  vm.openModalMenu = function() {
    vm.modalMenu = true;
  };

  vm.closeModalMenu = function() {
    vm.modalMenu = false;
  };

  vm.handleLogin = function() {
    console.log(`Handling login for: ${vm.username}`);
  }
}

const LANDING_COMPONENT = {
  controller: landingController,
  template: require('./landing.template.html'),
  require: {
    inputCtrl: '^inputComponent'
  }
}

export default LANDING_COMPONENT;