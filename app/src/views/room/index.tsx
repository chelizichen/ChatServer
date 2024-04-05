// ChatRoomSelection.js

import { Link } from 'react-router-dom';
import { List } from 'antd';

const RoomView = () => {
  const room = [
    {
      path:"/chatroom/1",
      name:"ChatRoom1",
    },
    {
      path:"/chatroom/2",
      name:"ChatRoom2",
    },
  ]
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Choose a Chat Room:</h2>
      <List
              bordered
              dataSource={room}
              renderItem={(msg) => <List.Item>
                    <Link to={msg.path}>{msg.name}</Link>
              </List.Item>}
              style={{ width:'90vw',margin:"0 5vw 20px 5vw" }}
      >
        
      </List>
    </div>
  );
};

export default RoomView;
