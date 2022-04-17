import React from 'react'

const ChatMessage = (props) => {
	const { text, local } = props.message;

	const messageClass = local ? 'sent' : 'received';

	return (<>
		<div className={`message ${messageClass}`}>
			<img src={'https://api.adorable.io/avatars/23/abott@adorable.png'} alt="profile" />
			<p>{text}</p>
		</div>
	</>)
}

export default ChatMessage