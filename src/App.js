import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './Pages/Home';
import Channels from './Components/Channels';
import Uploadvideo from './Pages/Uploadvideo';
import Categories from './Pages/Categories';
import Settings from './Pages/Settings';
import Myaccount from './Pages/Myaccount';
import Watchlater from './Pages/Watchlater';
import Subscription from './Components/Subscription';
import Video from './Pages/Video';
import Login from './Auth/Login';
import Uploadingdetails from './Pages/Uploadingdetails';

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route -> Login */}
        <Route path="/" element={<Login />} />

        {/* Main App Routes */}
        <Route path="/Home" element={<Home />} />
        <Route path="/Channels" element={<Channels />} />
        <Route path="/Uploadvideo" element={<Uploadvideo />} />
        <Route path='Uploadingdetails' element={<Uploadingdetails/>}/>
        <Route path="/Categories" element={<Categories />} />
        <Route path="/Watchlater" element={<Watchlater />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Myaccount" element={<Myaccount />} />
        <Route path="/Video" element={<Video />} />
        <Route path="/Subscription" element={<Subscription />} />

        {/* Catch-all fallback route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;