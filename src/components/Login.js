import firebase from 'firebase/app';

function Login({auth}) {
    function GoogleLogin() {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
    return (
        <button onClick={GoogleLogin}>Log in with Google</button>
    );

}

export default Login;