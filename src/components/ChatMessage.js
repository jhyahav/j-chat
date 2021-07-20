function ChatMessage(props) {

    const messageType = props.message.uid === props.auth.currentUser.uid ? 'sent' : 'received';
    return (
        <div className={`message {messageType}`}>
            <img src={props.message.photoURL}/>
            <p>{props.message.displayName}</p>
            <p>{props.message.text}</p>
        </div>
    );
}

export default ChatMessage;