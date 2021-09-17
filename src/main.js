import Vue from 'vue'
import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged } from "firebase/auth";

import vuetify from './plugins/vuetify'

import App from './App.vue'
import Vuelidate from 'vuelidate'
import router from './router'
import store from './store'
import firebaseConfig from './config/firebase'

Vue.config.productionTip = false

Vue.use(Vuelidate)

const firebaseApp = initializeApp(firebaseConfig)
console.log(firebaseApp)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      this.$store.dispatch('StateChanged', user);
    });
  }
}).$mount('#app')
