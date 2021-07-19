
function LogOut({auth}) {
    return auth.currentUser && (
        <button onClick={() => auth.signOut()}>Log out</button>
    );
}

export default LogOut;