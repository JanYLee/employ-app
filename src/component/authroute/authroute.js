import React from 'react';
import axios from 'axios';

class AuthRoute extends React.Component {
  componentDidMount() {
    // 获取用户信息
    axios.get('user/info').then(res => {
      if(res.status === 200) {
        console.log(res.data);
      }
    });
    // 是否登录 url为Login不需要跳转
  }

  render() {
    return <p>if jump</p>;
  }
}

export default AuthRoute;