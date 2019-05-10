import Vue from 'vue'
import App from './App.vue'
import wrap from '@vue/web-component-wrapper';
import ButtonComponent from './components/Button';
import CalculatorComponent from './components/Calculator';

const ButtonElement = wrap(Vue, ButtonComponent);
window.customElements.define('button-component', ButtonElement);

const CalculatorElement = wrap(Vue, CalculatorComponent);
window.customElements.define('calculator-component', CalculatorElement);

Vue.config.productionTip = false;
new Vue({
  render: h => h(App),
});