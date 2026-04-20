import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'; // Add the .jsx extension here
import './styles.css';      // Import your CSS here since it's in the same folder

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);