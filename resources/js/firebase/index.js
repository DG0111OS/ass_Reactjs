import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDo1-3g7rJeU8-wNvrseNJISJDL3qfgjWY",
    authDomain: "uploadimageassfe.firebaseapp.com",
    databaseURL: "https://uploadimageassfe.firebaseio.com",
    projectId: "uploadimageassfe",
    storageBucket: "uploadimageassfe.appspot.com",
    messagingSenderId: "477992176983",
    appId: "1:477992176983:web:d03e33b2ef969c224fc212",
    measurementId: "G-K0S7TV6RWQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
