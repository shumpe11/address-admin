import Vue from 'vue'
import './plugins/vuetify'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false



  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBYIbutgVhuGDsMqcr2L0rDHayKUJoEFhA",
    authDomain: "myaddress-45d98.firebaseapp.com",
    databaseURL: "https://myaddress-45d98.firebaseio.com",
    projectId: "myaddress-45d98",
    storageBucket: "myaddress-45d98.appspot.com",
    messagingSenderId: "506728027347",
    appId: "1:506728027347:web:13a52d0b9754ecd4573026",
    measurementId: "G-MPSBEG21G2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
