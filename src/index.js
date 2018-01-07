import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

// import { counter } from './redux';
import reducers from './reducer';
import Auth from './Auth';
import Dashboard from './Dashboard';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ?  window.devToolsExtension(): f=>f
));

// class Test extends React.Component{
//   constructor(props){
//     super(props)
//   }
//
//   render() {
//     console.log(this.props);
//     return (
//       <div>
//         测试组件 {this.props.match.params.location}
//       </div>
//     )
//   }
// }

ReactDOM.render(
  (<Provider store={store}>
    <BrowserRouter>
      <Switch>
        {/*只渲染第一个*/}
        {/*<Redirect to='/qi'/>*/}
        <Route path='/login' component={Auth} />
        <Route path='/dashboard' component={Dashboard} />
        <Redirect to='/dashboard'/>
        {/*<Route path='/:location' component={Test}/>*/}
      </Switch>
    </BrowserRouter>
  </Provider>),
  document.getElementById('root')
);

registerServiceWorker();
