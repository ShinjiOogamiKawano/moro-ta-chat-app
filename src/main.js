import firebase from "firebase";
import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCTRmjUNW4xpWEYaoBL8tWyJ0BnalQh-wM",
  authDomain: "moro-ta-chat-app.firebaseapp.com",
  databaseURL: "https://moro-ta-chat-app.firebaseio.com",
  projectId: "moro-ta-chat-app",
  storageBucket: "moro-ta-chat-app.appspot.com",
  messagingSenderId: "27063899854",
  appId: "1:27063899854:web:1a78c5c2fe7241b4eae29f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  render: h => h(App)
}).$mount("#app");
