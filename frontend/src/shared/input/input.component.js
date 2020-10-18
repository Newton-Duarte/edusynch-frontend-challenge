import './input.styles.css';

function inputController() {
  var vm = this;

  vm.showPassword = false;

  vm.handleShowPassword = function() {
    vm.showPassword = !vm.showPassword;
    if (vm.type === 'password') {
      vm.type = 'text';
    } else {
      vm.type = 'password';
    }
  }
}

const INPUT_COMPONENT = {
  controller: inputController,
  template: require('./input.template.html'),
  bindings: {
    type: '=',
    placeholder: '=',
    label: '=',
    fieldValue: '=',
    onChange: '&'
  }
}

export default INPUT_COMPONENT;