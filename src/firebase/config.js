import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCSX8zNABCC7rlMTFf6xE6uIvBHueGg1Dg',
  authDomain: 'rn-todolist-9e3f3.firebaseapp.com',
  databaseURL: 'https://rn-todolist-9e3f34.firebaseio.com',
  projectId: 'rn-todolist-9e3f3',
  storageBucket: 'rn-todolist-9e3f3.appspot.com',
  messagingSenderId: '884597961928',
  appId: '1:884597961928:android:298e14db1530bf2d6be1fd',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
