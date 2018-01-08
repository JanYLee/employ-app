import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { login, getUserData } from './Auth.redux'

@connect(
  state=>state.auth,
  {login, getUserData}
)
class Auth extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    }
  }

  componentDidMount() {
    this.props.getUserData();
  }

  render() {
    const { isAuth, user, age } = this.props;
    return (
      <div>
        <h2>name: {user}, age: {age}</h2>
        { isAuth ? <Redirect to='/dashboard' /> : null }
        <h2>no Auth, need login</h2>
        <button onClick={this.props.login}>login</button>
      </div>
    )
  }
}

export default Auth;
