import firebase from 'firebase'
import firestore from 'firebase/firestore'
var firebaseConfig = {
  apiKey: "AIzaSyDyihL-P7Fn4wbMB5sZ5xvkU8Udx93RwB0",
  authDomain: "chat-124e0.firebaseapp.com",
  projectId: "chat-124e0",
  storageBucket: "chat-124e0.appspot.com",
  messagingSenderId: "1085243815835",
  appId: "1:1085243815835:web:ed906bb081f4dd1450133e",
  measurementId: "G-8BKL6EF4E6"
};
  // Initialize Firebase
  const firebaseApp= firebase.initializeApp(firebaseConfig);
  firebase.analytics();

firebaseApp.firestore().settings({timestampsInSnapshots: true})

  export default firebaseApp.firestore()