import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import { counter, addNum, descreaseNum, addNumAsync } from './redux';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

const store = createStore(counter, applyMiddleware(thunk));

function render() {
  ReactDOM.render(<App store={store} addNum={addNum} descreaseNum={descreaseNum} addNumAsync={addNumAsync}/>, document.getElementById('root'));
}

render();

registerServiceWorker();

store.subscribe(render);
