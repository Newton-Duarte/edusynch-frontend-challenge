// import HEADER_COMPONENT from '../shared/header/header.component';
import MODAL_COMPONENT from '../shared/modal/modal.component';
import INPUT_COMPONENT from '../shared/input/input.component';
import LANDING_COMPONENT from '../components/landing/landing.component';

export const LANDING_MODULE = angular.module('landing.module', [])
  // .component('headerComponent', HEADER_COMPONENT)
  .component('modalComponent', MODAL_COMPONENT)
  .component('inputComponent', INPUT_COMPONENT)
  .component('landingComponent', {
    ...LANDING_COMPONENT,
    require: 'inputComponent'
  });