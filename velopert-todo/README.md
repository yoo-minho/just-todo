# VELOPERT-TODO

1. useReducer에 관하여

reducer 는 현재 상태와 객체 상태를 파라미터로 받아 새로운 상태를 반환해주는 함수이다.

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

2. TodoCreate 같은 경우는 리렌더링할 필요없으니 상태값들을 초기화해주고,  
   React.memo(TodoCreate)로 한번 렌더링하면 된다.

> Q. TodoProvider 꼭 useRef 를 써야 하는가?

3. 스프레드 문법 활용가능성

```js
function foo() {
    return {
        ...{a: 1}, 
        b: 2, c: 3
    }
}

function foo() {
    return {
        ...{a: 1},
        ...{b: 2, c: 3}
    }
}

function foo() {
    return {
        a: 1,
        ...{b: 2, c: 3}
    }
}
```

4. 버전업이 되었다고 이렇게 어려울일?

1.
속성이 바뀌고
안에 태그처리로 바꿔야 되는 거였음.
```js
<div>
   <Route path="/" component={Home} />
   <Route path="/about" component={About} />
</div>

<div>
   <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/about" element={<About/>}/>
   </Routes>
</div>

```

5. 서브라우트를 하려거든
   https://reactrouter.com/docs/en/v6/getting-started/overview#descendant-routes

6. 불필요한 리렌더링을 계속 추적해주는게 중요한데,
크롬 개발자 도구 - components => 설정 => Highlight updates 설정을 켠다.