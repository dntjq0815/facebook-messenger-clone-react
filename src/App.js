import React, {useState, useEffect} from 'react';
import { FormControl, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';


function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);  //입력창에서 배열로 받아옴 
  const [username, setUsername] = useState('');

  //useState = variables in REACT
  //useEffect = run code on a condition in REACT

  useEffect(() => {
    //run once when the app component loads
    db.collection('messages')
    .orderBy('timestamp', 'asc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    });
  }, [])

  useEffect(() => {
    setUsername(prompt('Please enter your name'));
    //run code here
    //if [] blank, this code runs only ONCE 
  }, []) //condition

  const sendMessage = (event) => {
    event.preventDefault();  //새로고침을 막아주는 메소드

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  return (
    <div className="App">
      <img src="https://www.freeiconspng.com/uploads/facebook-chat-logo-png-19.png" width="200px" height="200px"/>
      <h1>Facebook Messenger</h1>
      <h2>Welcome {username}!</h2>
      <form className = "app__form">
        <FormControl className = "app__formControl">
          <Input className = "app__input" placeholder = 'Enter a Message...' value = {input} onChange = {event => setInput(event.target.value)}/>
          <IconButton className = "app__iconButton" disabled = {!input} variant = "contained" color = "primary" type = 'submit' onClick = {sendMessage}>
            <SendIcon />
          </IconButton>
        </FormControl>       
      </form>

      <FlipMove>
      {
        messages.map(({id, message}) => (
          <Message key={id} username = {username} message = {message} />
        ))
      }
      </FlipMove>      
    </div>
  );
}

export default App;
