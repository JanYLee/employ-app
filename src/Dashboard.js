import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import App from './App';
import { logout } from "./Auth.redux";

function ering() {
  return <h1>er</h1>
}

function qiing() {
  return <h1>qiing</h1>
}

@connect(
  state=>state.auth,
  {logout}
)
class Dashboard extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    const match = this.props.match;
    const redirectToLogin = <Redirect to='/login' />
    const app = (
      <div>
        <h1>duli</h1>
        {this.props.isAuth ? <button onClick={this.props.logout}>注销</button> : null}
        <ul>
          <li>
            <Link to={`${match.url}/`}>yi</Link>
          </li>
          <li>
            <Link to={`${match.url}/er`}>er</Link>
          </li>
          <li>
            <Link to={`${match.url}/qi`}>qi</Link>
          </li>
        </ul>
        <Route path={`${match.url}/`} exact component={App} />
        <Route path={`${match.url}/er`} component={ering} />
        <Route path={`${match.url}/qi`} component={qiing} />
      </div>
    );
    return (
      this.props.isAuth ? app : redirectToLogin
    )
  }
}

export default Dashboard;
