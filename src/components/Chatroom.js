import firebase from 'firebase/app';
import 'firebase/firestore';
import { useEffect, useRef, useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
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
        //scrollRef.current.scrollIntoView({behavior: 'smooth'});
    }
    

    return (
        <>
            <div>
                {messages && messages.map(mes => <ChatMessage key={mes.id} message={mes} auth={props.auth}/>)}
            </div>

            <div ref={scrollRef}></div>

            <form onSubmit={sendMessage}>
                <input value={formValue} onChange={(event) => setFormValue(event.target.value)}/>
                <button type="submit">Send</button>

            </form>

        </>
    );
    
}

export default Chatroom;
