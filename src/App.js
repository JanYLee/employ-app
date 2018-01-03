import React, { Component } from 'react';
import { Button } from 'antd-mobile';

import {addNum, descreaseNum} from "./redux";

import './App.css';
import logo from './logo.svg';

class App extends Component {
  render() {
    const { store } = this.props;
    const num = store.getState();
    return (
      <div className="App">
        <h1>数字: {num}</h1>
        <Button onClick={() => store.dispatch(addNum())}>+1</Button>
        <Button onClick={() => store.dispatch(descreaseNum())}>-1</Button>
      </div>
    );
  }
}

export default App;
