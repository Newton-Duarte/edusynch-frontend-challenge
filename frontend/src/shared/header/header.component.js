import './header.styles.css';

function headerController() {
  var vm = this;

  vm.openModalLogin = function() {
    console.log('Abrir modal login');
  }

  vm.openModalMenu = function() {
    console.log('Abrir modal menu');
  }
}

const HEADER_COMPONENT = {
  controller: headerController,
  template: require('./header.template.html')
}

export default HEADER_COMPONENT;