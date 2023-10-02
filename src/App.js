import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/home/Home";
import PlayRecord from './components/playrecord/PlayRecord';
import Login from './components/login/login';
import Videos from './components/videos/Videos';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/helpMeOut" element={<Home />} />
          <Route path="/playrecord" element={<PlayRecord />} />
          <Route path="/login" element={<Login />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
