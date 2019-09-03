import Vue from "vue";
import App from "./App.vue";
import "vue2-toast/lib/toast.css";
import Toast from "vue2-toast";
import i18n from './i18n'

Vue.use(Toast);

Vue.config.productionTip = false;

new Vue({
  i18n,
  render: h => h(App)
}).$mount("#app");
