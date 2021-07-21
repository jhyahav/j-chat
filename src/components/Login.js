import firebase from 'firebase/app';

function Login({auth}) {
    function GoogleLogin() {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
    return (
        <>
            <h1>Welcome to j-chat</h1>
            <h2>To enter the chatroom, please sign in</h2>
            <button id='login' onClick={GoogleLogin}>Log in with Google</button>
        </>
    );

}

export default Login;