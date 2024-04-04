// ChatRoomSelection.js

import { Link } from 'react-router-dom';
import { Button } from 'antd';

const RoomView = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Choose a Chat Room:</h2>
      <Button type="primary" style={{ marginBottom: '20px' }}>
        <Link to="/chatroom/1">Chat Room 1</Link>
      </Button>
      <Button type="primary">
        <Link to="/chatroom/2">Chat Room 2</Link>
      </Button>
      {/* Add more chat rooms as needed */}
    </div>
  );
};

export default RoomView;
