import Vue from 'vue'
import App from './App.vue'
import wrap from '@vue/web-component-wrapper';
import ButtonComponent from './components/Button';

const ButtonElement = wrap(Vue, ButtonComponent);
window.customElements.define('button-component', ButtonElement);

Vue.config.productionTip = false;
new Vue({
  render: h => h(App),
});
