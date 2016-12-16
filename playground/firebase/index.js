import firebase from 'firebase';


// Initialize Firebase
var config = {
  apiKey: "AIzaSyC9AiZsJg1lXDupEIUcIutL4-jCBA4nPyA",
  authDomain: "aakash-todo-app.firebaseapp.com",
  databaseURL: "https://aakash-todo-app.firebaseio.com",
  storageBucket: "aakash-todo-app.appspot.com",
  messagingSenderId: "20015514391"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();
firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Aakash',
    age: 22
  }
});

// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('Got entire database', snapshot.key, snapshot.val());
// }, (e) => {
//   console.log('Unable to fetch value', e);
// });
firebaseRef.on('value', (snapshot) => {
  console.log('Got value', snapshot.val());
});

firebaseRef.update({isRunning: false});
