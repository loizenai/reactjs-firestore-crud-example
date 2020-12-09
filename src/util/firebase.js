import firebase from "firebase";

let firebaseConfig = {
  apiKey: "AIzaSyBV1mN0Ii6XHTYtFyb6zkxySPRzuqiNe3Q",
  authDomain: "loizenai-react-firestore.firebaseapp.com",
  projectId: "loizenai-react-firestore",
  storageBucket: "loizenai-react-firestore.appspot.com",
  messagingSenderId: "695085232572",
  appId: "1:695085232572:web:5dc1e79a31e5b2d1387bb9",
  measurementId: "G-TQJWFRH5NF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();