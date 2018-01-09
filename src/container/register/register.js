import React from 'react';
import {List, InputItem, Radio, WingBlank, WhiteSpace, Button} from 'antd-mobile';


import Logo from '../../component/logo/logo'

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'genius', // 或者boss
    }
  }

  render() {
    const RadioItem = Radio.RadioItem;
    const { type } = this.state;
    return (
      <div>
        <Logo />
        <h2>注册页</h2>
          <List>
            <InputItem>用户名</InputItem>
            <InputItem>密码</InputItem>
            <InputItem>确认密码</InputItem>
            <WhiteSpace />
            <RadioItem checked={type === 'genius'}>
              牛人
            </RadioItem>
            <RadioItem checked={type === 'boss'}>
              BOSS
            </RadioItem>
            <WhiteSpace />
            <Button type='primary'>注册</Button>
          </List>
      </div>
    )
  }
}

export default Register;