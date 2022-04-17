import React, { useRef, useState, useCallback } from 'react'
import ChatMessage from './ChatMessage'
import useSend from './useSend'

const ChatRoom = () => {
	const dummy = useRef();
	const [messages, setMessages] = useState([])
	const [formValue, setFormValue] = useState('');

	const addReplyMessage = useCallback((message) => {
		setMessages([...messages, {
			text: message,
			local: false
		}]);
		setFormValue('');
		dummy.current.scrollIntoView({ behavior: 'smooth' });
		console.log(message)
	}, [messages])

	const [sendMessageSocket] = useSend(addReplyMessage);

	const sendMessage = (e) => {
		e.preventDefault();
		console.log("message is getting sent")
		setMessages([...messages, {
			text: formValue,
			local: true
		}]);
		sendMessageSocket(formValue);
		setFormValue('');
		dummy.current.scrollIntoView({ behavior: 'smooth' });
	}



	return (<>
		<main>
			{messages && messages.map((msg, index) => <ChatMessage key={index} message={msg} />)}
			<div ref={dummy} style={{ height: '100px' }}></div>
		</main>

		<form onSubmit={sendMessage}>
			<input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
			<button type="submit" disabled={!formValue}>🕊️</button>
		</form>
	</>)
}

export default ChatRoom