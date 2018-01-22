import React from 'react';
import { NavBar, InputItem, TextareaItem, Button } from 'antd-mobile';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import AvatarSelector from '../../component/avatar-selector/avatar-selector';
import { update } from '../../redux/user.redux';

@connect(
  state => state.user,
  {update}
)
class GeniusInfo extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      desc: ''
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
    const path = this.props.location.pathname;
    const redirect = this.props.redirectTo;
    return (
      <div>
        {redirect && redirect !== path ? <Redirect to={redirect} /> : null }
        <NavBar mode="dark">牛人完善信息页</NavBar>
        <AvatarSelector selectAvatar={elm => this.selectAvatar(elm)} />
        <InputItem onChange={v => this.onChange('title', v)}>求职岗位</InputItem>
        <TextareaItem rows={3} autoHeight title='个人简介' onChange={v => this.onChange('desc', v)} />
        <Button onClick={() => {
          this.props.update(this.state);
        }} type='primary'>保存</Button>
      </div>
    )
  }
}

export default GeniusInfo;
