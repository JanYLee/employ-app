const ADD_NUM = 'add';
const DECREASE_NUM = 'dec';

// 通过reducer遍历
// 根据老的state和action 生产新的state;
export function counter(state = 0, action) {
    switch (action.type){
        case ADD_NUM:
            return state+1;
        case DECREASE_NUM:
            return state-1;
        default:
            return 10;
    }
}

export function addNum() {
    return {type: ADD_NUM};
}

export function descreaseNum() {
    return {type: DECREASE_NUM};
}
