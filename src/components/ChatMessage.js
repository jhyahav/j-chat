
function ChatMessage(props) {
    const { uid, text, displayName, photoURL, createdAt } = props.message;
    const messageType = uid === props.auth.currentUser.uid ? 'sent' : 'received';
    const date = createdAt ? createdAt.toDate().toLocaleString() : '';

    return (
        <div className={`message ${messageType}`}>
            <img src={photoURL} alt={`User profile: ${displayName}`} />
            <p>{displayName}</p>
            <p>{text}</p>
            <p>{date}</p>
        </div>
    );
}

export default ChatMessage;