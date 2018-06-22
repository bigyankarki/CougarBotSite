import * as firebase from 'firebase';

export const firebase_config = {
  apiKey: "AIzaSyBkZx09MF5VY0pxn9KfZAgtTvH6wdNmiWk",
  authDomain: "cougarbot-site.firebaseapp.com",
  databaseURL: "https://cougarbot-site.firebaseio.com",
  projectId: "cougarbot-site",
  storageBucket: "cougarbot-site.appspot.com",
  messagingSenderId: "1050730162532"
};

export const firebaseApp = firebase.initializeApp(firebase_config);
//export const posts = firebase.database().ref('posts');
export const db = firebase.database();
