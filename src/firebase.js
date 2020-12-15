import firebase from "firebase";


const firebaseConfig={
apiKey: "AIzaSyCGGn04Jowa9ARTNbwhcYzMw48h7h4F_gc",
authDomain: "wuzi-app.firebaseapp.com",
databaseURL: "https://wuzi-app.firebaseio.com",
projectId: "wuzi-app",
storageBucket: "wuzi-app.appspot.com",
messagingSenderId: "936152497981",
appId: "1:936152497981:web:d6fb7aebd962ce74908f54",
measurementId: "G-FV3YNC0JQ7"}


const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();

export { db, auth };