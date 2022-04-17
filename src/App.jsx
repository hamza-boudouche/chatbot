
import './App.css';

import React, { useRef, useState } from 'react';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>⚛️🔥💬</h1>
      </header>
  
      <section>
        <ChatRoom />
      </section>
  
    </div>
  );
}

/*const alphabates = ['a','b','c','d','e','f','g','h','i','j','k','l']
const results = alphabates.map((alphabate) => {alphabate})
console.log(results);*/

/*function NameList(props) {  
  const myLists = props.myLists;  
  const listItems = myLists.map((myList) =>  
    <li>{myList}</li>  
  ); 
*/

function ChatRoom() {

  const dummy = useRef();

  const [formValue, setFormValue] = useState('');

  const sendMessage = async(e) => {
    e.preventDefault(); //le curseur est toujours dispo après l'envoi d'un message

    setFormValue(''); //pour réinitialiser la barre de message

    dummy.current.scrollIntoView({ behavior: 'smooth' });

  }

  return (
    <>

      <main>

        <ChatMessage message={formValue} />;

        <div ref={dummy}></div>


      </main>
      <form onSubmit={sendMessage}>
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} />

        <button type="submit">sumbit</button>
        
      </form>
    
    
    
    
    </>
  )
  
}

function ChatMessage(props) {

  const{ text } = props.message;

  return (<>
    <div>
      <p>{text}</p>
    </div>
  </>)
}

export default App;
