import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// Import global styles
import './styles/globals.css';
import './styles/animations.css';

// Get root element
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found. Please add a div with id="root" to your index.html');
}

// Create React root and render app
createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
