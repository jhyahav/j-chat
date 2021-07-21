import firebase from 'firebase/app';
import 'firebase/firestore';
import { useEffect, useRef, useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import SendIcon from '@material-ui/icons/Send';
import ChatMessage from './ChatMessage';

function Chatroom(props) {
    const messagesRef = props.firestore.collection('messages');
    const messageQuery = messagesRef.orderBy('createdAt', 'asc').limitToLast(15);
    const [messages] = useCollectionData(messageQuery, {idField: 'id'});
    const [formValue, setFormValue] = useState('');
    const scrollRef = useRef();
    useEffect(() => {scrollRef.current.scrollIntoView({behavior: 'smooth'})}, [messageQuery]);
    const sendMessage = async(event) => {
        event.preventDefault();
        const {uid, photoURL, displayName} = props.auth.currentUser;
        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL,
            displayName
        })
        setFormValue('');
    }
    const isLegalInput = (string) => {
        return (!string.match(/^\s*$/)) && (string.length < 180);
    }

    return (
        <>
            <main>
                <div>
                    {messages && messages.map(mes => <ChatMessage key={mes.id} message={mes} auth={props.auth}/>)}
                </div>
                <div ref={scrollRef}></div>
            </main>
            <form onSubmit={sendMessage}>
                <button id='send-button' type='submit' disabled={!isLegalInput(formValue)}>
                    <SendIcon id='send-icon'/>
                </button>
                <input value={formValue} onChange={(event) => setFormValue(event.target.value)}/>
            </form>

        </>
    );
    
}

export default Chatroom;
