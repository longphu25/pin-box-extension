import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import React from 'react';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="h-[400px] w-[500px]">
      <App />
    </div>
  </React.StrictMode>,
);
