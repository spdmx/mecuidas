import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import InfoHeberprot from './pages/InfoHeberprot';
import Dashboard from './pages/Dashboard';
import CaseEntry from './pages/CaseEntry';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        {/* Background Blobs for Glassmorphism */}
        <div className="bg-blob bg-blob-1"></div>
        <div className="bg-blob bg-blob-2"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/heberprot" element={<InfoHeberprot />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/case-entry/:id?" element={<CaseEntry />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
