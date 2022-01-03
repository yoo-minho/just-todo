# VELOPERT-TODO

```js
/**
 * state - 현재 state 객체
 * dispatch - state의 변경 함수
 * useReducer - 리액트 내장 함수 (변경을 기록한다)
 * action - dispatch의 첫번째 인자
 * initialTodos - 최초 state 객체
 */
const [state, dispatch] = useReducer(function todoReducer(state, action) {
        return {...{}, ...state};
    }, initialTodos);

```

> Q. TodoProvider 꼭 useRef 를 써야 하는가? 