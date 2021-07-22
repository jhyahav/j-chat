
function ChatMessage(props) {
    const { uid, text, displayName, photoURL, createdAt } = props.message;
    const messageType = uid === props.auth.currentUser.uid ? 'sent' : 'received';
    const date = createdAt ? createdAt.toDate().toLocaleString() : '';
    const fullDisplayName = (messageType === 'sent') ? displayName + ' (you)' : displayName;

    return (
        <div className={`message ${messageType}`}>
            <p className='display-name'>{fullDisplayName}</p>
            <div className='text-pic-wrapper'>
                <img className='profile-pic' src={photoURL} alt={`User profile: ${displayName}`} />
                <p className='message-text'>{text}</p>
            </div>
            <p className='date'>{date}</p>
        </div>
    );
}

export default ChatMessage;