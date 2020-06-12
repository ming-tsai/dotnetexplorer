// Vue components
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// UI components
import Buefy from "buefy";
import "buefy/dist/buefy.css";

// Icon components
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
// Import icons that you need
import { faHeart, faRobot } from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";

// Setting up icon component
library.add(faHeart, faRobot, faGithubAlt);
Vue.component("vue-fontawesome", FontAwesomeIcon);

// Setting up Buefy
Vue.use(Buefy, {
  defaultIconComponent: "vue-fontawesome",
  defaultIconPack: "fas",
  defaultContainerElement: "app"
});

// Vue setting
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
