import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
import App from './app.js'; // Import your App component

// Create a root element
const root = ReactDOM.createRoot(document.getElementById('root')); // Update to createRoot

// Render the App component
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
