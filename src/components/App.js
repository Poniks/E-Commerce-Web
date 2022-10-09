import React from 'react';
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import NewAndFeatured from './pages/New&Featured';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <Dashboard /> } />
        <Route exact path="/newandfeatured" element={ <NewAndFeatured /> } />
      </Routes>
    </Router>
  );
}

export default App;
