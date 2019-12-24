import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import auth from "./directive/auth";
import Authorized from "./components/Authorized";
import "./mock";
import {
  Button,
  Layout,
  Icon,
  Menu,
  Drawer,
  Radio,
  Form,
  Input
} from "ant-design-vue";
Vue.use(Button);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Menu);
Vue.use(Drawer);
Vue.use(Radio);
Vue.use(auth);
Vue.use(Form);
Vue.use(Input);
Vue.component("Authorized", Authorized);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
