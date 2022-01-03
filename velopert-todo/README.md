# VELOPERT-TODO

```js

/**
 * @param state ([])- 기존 state
 * @param action ({})- 추가 데이터
 * @returns {*}
 */
function todoReducer(state = [], action = {}) {
    return {...{}, ...state};
}

/**
 * state ([])- 현재 state
 * action ({}) - dispatch(첫번째 인자)
 * initialTodos - 최초 state
 */
const [state, dispatch] = useReducer(function todoReducer(state, action) {
    return {...{}, ...state};
}, initialTodos);

```
