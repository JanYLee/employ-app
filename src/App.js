import React, { Component } from 'react';
import { Button } from 'antd-mobile';

import './App.css';
import logo from './logo.svg';

class App extends Component {
  render() {
    const { store, addNum, descreaseNum, addNumAsync } = this.props;
    const num = store.getState();
    return (
      <div className="App">
        <h1>数字: {num}</h1>
        <Button onClick={() => store.dispatch(addNum())}>+1</Button>
        <Button onClick={() => store.dispatch(descreaseNum())}>-1</Button>
        <Button onClick={() => store.dispatch(addNumAsync())}>+1 async </Button>
      </div>
    );
  }
}

export default App;
