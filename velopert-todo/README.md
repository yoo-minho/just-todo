# VELOPERT-TODO

1. useReducer에 관하여

reducer 는 현재 상태와 객체 상태를 파라미터로 받아
새로운 상태를 반환해주는 함수이다.

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

2. TodoCreate 같은 경우는 리렌더링할 필요없으니
상태값들을 초기화해주고,
React.memo(TodoCreate)로 한번 렌더링하면 된다.

> Q. TodoProvider 꼭 useRef 를 써야 하는가? 