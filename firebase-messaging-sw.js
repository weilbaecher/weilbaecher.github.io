importScripts('https://www.gstatic.com/firebasejs/3.7.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.7.2/firebase-messaging.js');

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBlaHmVZSckMomiI3BbT0oxJCBbbGjqd54",
    authDomain: "push-test-161718.firebaseapp.com",
    databaseURL: "https://push-test-161718.firebaseio.com",
    storageBucket: "push-test-161718.appspot.com",
    messagingSenderId: "69874747537"
  };
  firebase.initializeApp(config);