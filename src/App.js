import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Use Routes instead of Switch
import GetPage from './components/GetPage';
import PostPage from './components/PostPage';
import PutPage from './components/PutPage';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <h1>React Frontend - Trainee</h1>
        <Routes> {/* Use Routes here */}
          <Route path="/get" element={<GetPage />} />  {/* Use element instead of components */}
          <Route path="/post" element={<PostPage />} />
          <Route path="/put" element={<PutPage />} />
        </Routes> {/* End of Routes */}
      </div>
    </Router>
  );
}

export default App;

