import * as firebase from 'firebase';


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBehVoYbUIR9pGEnCqAYkWDmWFlqLbhVCM",
    authDomain: "tender-app-labtask.firebaseapp.com",
    databaseURL: "https://tender-app-labtask.firebaseio.com",
    projectId: "tender-app-labtask",
    storageBucket: "tender-app-labtask.appspot.com",
    messagingSenderId: "798752804058"
  };
  firebase.initializeApp(config);

  export default firebase;
