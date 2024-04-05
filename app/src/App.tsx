import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import RoomViews from './views/room';
import ChatView from './views/chat';
import LoginForm from './views/login';

const App = () => {
  return (
    <Router basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/rooms" element={<RoomViews/>} />
          <Route path="/chatroom/:id" element={<ChatView/>} />
        </Routes>
    </Router>
  );
};

export default App;
