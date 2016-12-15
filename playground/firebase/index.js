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

// firebaseRef.update({
//   isRunning: false,
//   'app/name': 'Todo Application'
// });

// firebaseRef.child('app').update({
//   name: 'Todo Application'
// }).then(() => {
//   console.log('Update worked!');
// }, (e) => {
//   console.log('Update failed!');
// });

// firebaseRef.update({
//   'app/name': 'Todo Application',
//   'user/name': 'Ajit'
// });

firebaseRef.child('app').update({
  name: 'Todo Application'
});

firebaseRef.child('user').update({
  name: 'Ajit'
});
