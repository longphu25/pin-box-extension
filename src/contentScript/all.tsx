import ReactDOM from 'react-dom/client';
import React from 'react';

import App from './App.tsx';

const rootContent = document.createElement('div');
rootContent.id = 'content-root';

document.body.append(rootContent);

ReactDOM.createRoot(rootContent).render(
  <React.StrictMode>
    <div className="flex items-center justify-between gap-2 rounded bg-blue-100 px-2 py-1">
      <App />
    </div>
  </React.StrictMode>,
);
