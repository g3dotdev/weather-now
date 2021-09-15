import React from 'react';
import ReactDOM from 'react-dom';

import { GlobalStyles } from './styles/GlobalStyles';
import { FontFaceStyles } from './styles/FontFaceStyles';

import { Home } from './pages/Home';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <FontFaceStyles />
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);
