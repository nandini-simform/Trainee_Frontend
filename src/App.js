import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import HomePage from './components/HomePage';
import GetPage from './components/GetPage';
import PostPage from './components/PostPage';
import DeletePage from './components/DeletePage';

// Import the PrivateRoute
import './App.css';

function App() {
  
  return (
    <Router>
      <div>
        <h1>React Frontend - Trainee</h1>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
            <Route path="/get" element={<GetPage />} />
            <Route path="/post" element={<PostPage />} />
            <Route path="/delete/:id" element={<DeletePage />} />
          </Routes>
        
      </div>
    </Router>
  );
}

export default App;
