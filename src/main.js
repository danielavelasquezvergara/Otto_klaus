import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyDHnZCmWrKR0B_NBpjDP-vG_9nkMwvb8gM",
  authDomain: "otto-klaus-7fa3a.firebaseapp.com",
  databaseURL: "https://otto-klaus-7fa3a.firebaseio.com",
  projectId: "otto-klaus-7fa3a",
  storageBucket: "otto-klaus-7fa3a.appspot.com",
  messagingSenderId: "328960267155",
  appId: "1:328960267155:web:becd24f7b49ef9379a0e66"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'