import { useEffect, useState } from 'react';
import { db, auth } from '../firebase';
import { collection, addDoc, onSnapshot, orderBy, query } from 'firebase/firestore';

function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('createdAt'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  const sendMessage = async () => {
    await addDoc(collection(db, 'messages'), {
      text: input,
      createdAt: new Date(),
      uid: auth.currentUser.uid,
    });
    setInput('');
  };

  return (
    <div>
      {messages.map(msg => (
        <div key={msg.id}>
          {msg.text} – Mood: {msg.sentimentScore > 0.2 ? '😊' : msg.sentimentScore < -0.2 ? '😞' : '😐'}
        </div>
      ))}
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default ChatRoom;