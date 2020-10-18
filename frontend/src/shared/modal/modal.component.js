import './modal.styles.css';

function modalController() {
  var vm = this;
}

const MODAL_COMPONENT = {
  controller: modalController,
  template: require('./modal.template.html'),
  transclude: true,
}

export default MODAL_COMPONENT;