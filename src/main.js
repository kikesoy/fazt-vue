// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";

import Test from "./components/Test";
import Users from "./components/Users";

//Importar la libreria VUE RESOURCE
import VueResource from "vue-resource";

Vue.use(VueResource);

//Importar la librería VUE ROUTER
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    {
      path: "/",
      component: Users
    },
    {
      path: "/test",
      component: Test
    }
  ]
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  components: { App },
  template: "<App/>"
}).$mount("#app");
