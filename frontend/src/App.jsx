import React from 'react';
import Home from './pages/Home.jsx';        // Added .jsx
import Privacy from './pages/Privacy.jsx';
import Navbar from './components/Navbar.jsx'; // Added .jsx
import './styles.css';

export default function App() {
  const path = typeof window !== 'undefined' ? window.location.pathname : '/';

  return (
    <div className="app-container">
      <Navbar />
      {path === '/privacy' ? <Privacy /> : <Home />}
    </div>
  );
}