import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  data() {
    return {
      activeCard: 0,
      cards: [],
      formData: {
        id: null,
        holder: "",
        number: "",
        vendor: "",
        validMonth: "MM",
        validYear: "YY"
      }
    };
  },
  render: h => h(App)
}).$mount("#app");
