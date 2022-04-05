import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyAiQfnPJnAeZDf73Y-Lozyv0bgusvPuVh4",
    authDomain: "curso-bec43.firebaseapp.com",
    projectId: "curso-bec43",
    storageBucket: "curso-bec43.appspot.com",
    messagingSenderId: "721989091832",
    appId: "1:721989091832:web:005af1596a11f944b0160d",
    measurementId: "G-5JZCBDMC6N"
};


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;