import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reduxInit from './redux';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

console.log(reduxInit);