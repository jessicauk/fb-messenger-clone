import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBJ_y3qZ1CZFPYDwWbdLBZa2vNfju5JQG8",
  authDomain: "fb-messenger-clone-183a6.firebaseapp.com",
  databaseURL: "https://fb-messenger-clone-183a6.firebaseio.com",
  projectId: "fb-messenger-clone-183a6",
  storageBucket: "fb-messenger-clone-183a6.appspot.com",
  messagingSenderId: "46763939744",
  appId: "1:46763939744:web:4025d45380a6dd0df236c5",
  measurementId: "G-BQ4KNRTM33"
})

const db = firebaseApp.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp()


export {db, timestamp}