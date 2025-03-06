import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Planets from './components/Planets';
import Missions from './components/Missions';
import Discoveries from './components/Discoveries';
import Chatbot from './components/Chatbot';

import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import Nomatch from './components/Nomatch';
import { Auth } from './components/Auth';
import './index.css';

export default function App() {
  return (
    <Auth>
      <div>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/planets' element={<Planets />} />
          <Route path='/missions' element={<Missions />} />
          <Route path='/discoveries' element={<Discoveries />} />
          <Route path='/chatbot' element={<Chatbot />} />
          
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          {/** Only show Profile when user is logged in */}
          <Route path='/profile' element={<Profile />} />
          <Route path='*' element={<Nomatch />} />
        </Routes>
      </div>
    </Auth>
  );
}
