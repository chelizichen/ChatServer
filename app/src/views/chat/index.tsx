import { useState,useEffect } from 'react'
import {  Button, List } from 'antd';
import TextArea from 'antd/es/input/TextArea';

const ChatView = ()=> {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const socket = new WebSocket(import.meta.env.VITE_WS);

  useEffect(() => {
    socket.onopen = () => {
      console.log('WebSocket connected');
    };

    socket.onmessage = (event) => {
      const incomingMessage = JSON.parse(event.data);
      console.log('收到消息',incomingMessage);
      
      setMessages((prevMessages) => [...prevMessages, incomingMessage]);
    };
    return () => {
      socket.close();
    };
  }, []);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    if (message.trim() !== '') {
      socket.send(JSON.stringify({ message }));
      setMessage('');
    }
  };

  return (
    <div className="App">
      <h1 style={{textAlign:'center'}}>Chat Room</h1>
      <List
        bordered
        dataSource={messages}
        renderItem={(msg) => <List.Item>{msg.message}</List.Item>}
        style={{ width:'90vw',margin:"0 5vw 20px 5vw" }}
      />
      <TextArea
        rows={4}
        value={message}
        onChange={handleMessageChange}
        placeholder="..."
        style={{  width:'90vw',margin:"0 5vw 20px 5vw"}}
      />
      <Button type="primary" onClick={sendMessage} style={{  width:'90vw',margin:"0 5vw 20px 5vw"}}>
        Send
      </Button>
    </div>
  );
}

export default ChatView
