import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function LogOut({auth}) {
    return auth.currentUser && (
        <button id='logout' onClick={() => auth.signOut()}>
            <ExitToAppIcon/>
        </button>
    );
}

export default LogOut;