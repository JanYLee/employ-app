import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import { connect } from 'react-redux';

import {addNum, descreaseNum, addNumAsync} from './index.redux';

import './App.css';

@connect(
  state => ({ num: state.counter }),// 你需要的state什么属性放到props
  {addNum, descreaseNum, addNumAsync} //你需要什么方法放到props, 自动dispatch
)
class App extends Component {
  render() {
    const { num, addNum, descreaseNum, addNumAsync } = this.props;
    return (
      <div className="App">
        <h1>数字: {num}</h1>
        <Button onClick={addNum}>+1</Button>
        <Button onClick={descreaseNum}>-1</Button>
        <Button onClick={addNumAsync}>+1 async </Button>
      </div>
    );
  }
}

export default App;
