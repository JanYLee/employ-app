import React from 'react';
import { NavBar, InputItem, TextareaItem, Button } from 'antd-mobile';

import AvatarSelector from '../../component/avatar-selector/avatar-selector';

class BossInfo extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
  }

  onChange(key, val) {
    this.setState({
      [key]: val
    });
  }

  selectAvatar(elm) {
    this.setState({
      avatar: elm
    })
  }

  render() {
    return (
      <div>
        <NavBar mode="dark">BOSS完善信息页</NavBar>
        <AvatarSelector selectAvatar={elm => this.selectAvatar(elm)} />
        <InputItem onChange={v => this.onChange('title', v)}>招聘职位</InputItem>
        <InputItem onChange={v => this.onChange('company', v)}>公司名称</InputItem>
        <InputItem onChange={v => this.onChange('money', v)}>职位薪资</InputItem>
        <TextareaItem rows={3} autoHeight title='职位要求' onChange={v => this.onChange('desc', v)} />
        <Button type='primary'>保存</Button>
      </div>
    )
  }
}

export default BossInfo;
