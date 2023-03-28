import * as React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

import FlyOutProvider from './context/FlyOutProvider';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <FlyOutProvider>
    <App />
  </FlyOutProvider>
);
