import React, { useState, useEffect } from 'react';
import './App.css';
import {  FormControl, InputLabel, Input, IconButton } from '@material-ui/core'
import FlipMove from 'react-flip-move';
import Message from './Message'
import { db, timestamp } from './firebase'
import SendIcon from '@material-ui/icons/Send';


function App() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const [username, setUsername] = useState('')

  const sendMessage = (event) => {
    event.preventDefault()
    db.collection('messages').add({
      message: input,
      username,
      timestamp
    })
    setInput('')
  }
  const onChangeMessage = (e) => {
    setInput(e.target.value)
  }

  useEffect(() => {
    db.collection('messages').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
    });
  }, [])

  useEffect(() => {
    setUsername(prompt("Please enter your name"))
    return () => {
    }
  }, [])

  return (
    <div className="App">
      <img className="app__logo" src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" ></img>
      <h1>Facebook Messenger Clone 🔥 </h1>
      <h2>Welcome: {username}</h2>
      <form className="app__form">
        <FormControl className="app__formControl">
          {/* Input field */}
          <InputLabel htmlFor="my-input">Message</InputLabel>
          <Input className="app__input" placeholder="Enter a message..." value={input} onChange={onChangeMessage} />
          {/* Button */}
          
          <IconButton
            onClick={sendMessage}
            disabled={input === ''}
            variant="outlined"
            color="primary"
            className="app__iconButton"
          >
            <SendIcon/>
          </IconButton>
        </FormControl>
      </form>
      {/* Messages */}
      <div className="app__messageContainer">
        <FlipMove>
          {
            messages.map(({ message, id }) => {
              return <Message key={id} username={username} message={message} />
            })
          }
        </FlipMove>
      </div>
    </div>
  );
}

export default App;
