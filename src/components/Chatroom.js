import 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatMessage from './ChatMessage';

function Chatroom({firestore}) {
    const messagesRef = firestore.collection('messages');
    console.log('Chatroom');
    const messageQuery = messagesRef.orderBy('createdAt').limit(15);
    console.log(messageQuery);
    const [messages] = useCollectionData(messageQuery, {idField: 'id'});
    console.log([messages]);

    return (
        <>
            <div>
                {messages && messages.map(mes => <ChatMessage key={mes.id} message={mes}/>)}
            </div>
        </>
    );
    
}

export default Chatroom;
