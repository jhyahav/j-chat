import React from 'react';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {useAuthState} from 'react-firebase-hooks/auth';
import Login from './components/Login';
import LogOut from './components/LogOut';
import Chatroom from './components/Chatroom';


firebase.initializeApp({
  apiKey: "AIzaSyC-dx4qF9RJwBimJlCjG_cbXaMgIKLmU8I",
  authDomain: "j-chatroom.firebaseapp.com",
  projectId: "j-chatroom",
  storageBucket: "j-chatroom.appspot.com",
  messagingSenderId: "221252088781",
  appId: "1:221252088781:web:371ca8b5d87dcac675ca84",
  measurementId: "G-RPJS9MXKXT"
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
      </header>
      <div>
          {user ? <Chatroom firestore={firestore} auth={auth}/> : <Login auth={auth}/>}
          <LogOut auth={auth}/>
      </div>

    </div>
  );
}

export default App;