import React from 'react';
import './App.css';
import { Routes, Route,BrowserRouter } from 'react-router-dom';
import Main from './components/main';
import Login from './components/login';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/mainpage/*' element={<Main/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
