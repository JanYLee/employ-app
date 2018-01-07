
// 合并所有reducer 并且返回
import { combineReducers } from 'redux';
import { counter } from './redux';
import { auth } from './Auth.redux';

export default combineReducers({counter, auth});

