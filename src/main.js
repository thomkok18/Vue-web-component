import Vue from 'vue';
import App from './App.vue';

import wrap from "@vue/web-component-wrapper";
import Button from './components/Button';
import Calculator from './components/Calculator';

new Vue({
    render: h => h(App),
});

const ButtonElement = wrap(Vue, Button);
const CalculatorElement = wrap(Vue, Calculator);

window.customElements.define('button-component', ButtonElement);
window.customElements.define('calculator-component', CalculatorElement);

Vue.config.productionTip = false;
Vue.config.devtools = false;