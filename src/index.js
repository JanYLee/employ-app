import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import App from './App';
import { counter } from './redux';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

const store = createStore(counter);

function render() {
  ReactDOM.render(<App store={store}/>, document.getElementById('root'));
}

render();

registerServiceWorker();

store.subscribe(render);
