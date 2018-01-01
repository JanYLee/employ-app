import { createStore } from 'redux';

// 1新建store
// 通过reducer遍历
// 根据老的state和action 生产新的state;
function counter(state = 0, action) {
    switch (action.type){
        case 'add':
            return state+1;
        case 'dec':
            return state-1;
        default:
            return 10;
    }
}

// 1新建store
const store = createStore(counter);
const init = store.getState();
export default init;

function listener() {
    const current = store.getState();
    console.log(`now state: ${current}`);
}
store.subscribe(listener);
// 派发时间 传递action
store.dispatch({type: 'add'});
console.log(store.getState());
store.dispatch({type: 'add'});
console.log(store.getState());
store.dispatch({type: 'dec'});
console.log(store.getState());
