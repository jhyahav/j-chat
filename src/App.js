import React from 'react';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
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
        <div id='logo-container'>
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" fill="white" />
            <path d="M29.0247 85.992C25.7394 85.992 22.8594 85.3947 20.3847 84.2L25.0567 75.56C26.1661 76.2427 27.3821 76.584 28.7047 76.584C29.8567 76.584 30.7954 76.2213 31.5207 75.496C32.2461 74.7707 32.7581 73.6187 33.0568 72.04L39.8408 38.312H52.0008L45.2808 71.656C43.4034 81.2133 37.9848 85.992 29.0247 85.992ZM47.5848 34.472C45.4941 34.472 43.8088 33.896 42.5288 32.744C41.2488 31.592 40.6088 30.1627 40.6088 28.456C40.6088 26.4507 41.3128 24.808 42.7208 23.528C44.1714 22.2053 46.0701 21.544 48.4167 21.544C50.5501 21.544 52.2568 22.0987 53.5368 23.208C54.8168 24.2747 55.4568 25.6613 55.4568 27.368C55.4568 29.4587 54.7314 31.1653 53.2808 32.488C51.8301 33.8107 49.9314 34.472 47.5848 34.472ZM62.3903 49.064C60.9823 49.064 59.7876 48.5947 58.8063 47.656C57.8676 46.7173 57.3983 45.5227 57.3983 44.072C57.3983 42.4507 57.9316 41.1067 58.9983 40.04C60.0649 38.9733 61.3876 38.44 62.9663 38.44C64.3743 38.44 65.5476 38.9093 66.4863 39.848C67.4249 40.7867 67.8943 41.9813 67.8943 43.432C67.8943 45.096 67.3396 46.4613 66.2303 47.528C65.1636 48.552 63.8836 49.064 62.3903 49.064ZM58.1023 62.824C59.5103 62.824 60.6836 63.2933 61.6223 64.232C62.5609 65.1707 63.0303 66.3653 63.0303 67.816C63.0303 68.584 62.8809 69.3093 62.5823 69.992C62.3263 70.632 61.8569 71.5493 61.1743 72.744L55.2863 82.664H50.1662L54.7743 72.68C54.0916 72.2107 53.5369 71.6133 53.1103 70.888C52.7263 70.1627 52.5343 69.352 52.5343 68.456C52.5343 66.8347 53.0676 65.4907 54.1343 64.424C55.2009 63.3573 56.5236 62.824 58.1023 62.824Z" fill="#004B23" />
          </svg>
          <h1>
            j-chat;
          </h1>
        </div>
        <LogOut auth={auth} />
      </header>
      <div>
        {user ? <Chatroom firestore={firestore} auth={auth} /> : <Login auth={auth} />}
      </div>
    </div>
  );
}

export default App;