import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
// comment out to prevent error
// Error during service worker registration:
//  DOMException: Only secure origins are allowed
// c.f. https://github.com/facebook/create-react-app/issues/2413
