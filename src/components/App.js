import React from 'react';
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <Dashboard /> } />
      </Routes>
    </Router>
  );
}

export default App;
