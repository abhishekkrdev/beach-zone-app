import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './components/globals/GlobalStyles';

ReactDOM.render(
  <React.Fragment>
    <GlobalStyles />
    <App />
  </React.Fragment>,
  document.getElementById('root')
);
