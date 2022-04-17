import { useState, useEffect } from 'react'
import { io } from "socket.io-client";

const useSend = (callback) => {
	const url = "http://localhost:5034";
	const token = "";
	const [socket, setSocket] = useState();

	useEffect(() => {
		setSocket(io(url, {
			extraHeaders: {
				Authorization: `Bearer ${token.result}`
			}
		}));
		console.log("socket set!")
	}, []);

	useEffect(() => {
		socket && socket.on("reply", message => {
			console.log(message)
			callback(message[0].text);
		})
		console.log('socket reply set!')
	}, [callback, socket])

	const sendMessage = (message) => {
		socket.emit("message", message);
	}

	return [sendMessage];
}

export default useSend;