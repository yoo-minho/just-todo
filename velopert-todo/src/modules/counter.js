import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';

/* 액션 타입 만들기 */
// Ducks 패턴을 따를땐 액션의 이름에 접두사를 넣어주세요.
// 이렇게 하면 다른 모듈과 액션 이름이 중복되는 것을 방지 할 수 있습니다.
const SET_DIFF = 'counter/SET_DIFF';
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_ASYNC = 'INCREASE_ASYNC';
const DECREASE_ASYNC = 'DECREASE_ASYNC';

/* 액션 생성함수 만들기 */
// 액션 생성함수를 만들고 export 키워드를 사용해서 내보내주세요.
export const setDiff = diff => ({type: SET_DIFF, diff});
export const increase = () => ({type: INCREASE});
export const decrease = () => ({type: DECREASE});

export const increaseAsync = () => ({ type: INCREASE_ASYNC });
export const decreaseAsync = () => ({ type: DECREASE_ASYNC });

// export const increaseAsync = () => dispatch => {
//     setTimeout(() => dispatch(increase()), 1000);
// }
// export const decreaseAsync = () => dispatch => {
//     setTimeout(() => dispatch(decrease()), 1000);
// }

function* increaseSaga() {
    yield delay(1000); // 1초를 기다립니다.
    yield put(increase()); // put은 특정 액션을 디스패치 해줍니다.
}
function* decreaseSaga() {
    yield delay(1000); // 1초를 기다립니다.
    yield put(decrease()); // put은 특정 액션을 디스패치 해줍니다.
}

export function* counterSaga() {
    yield takeEvery(INCREASE_ASYNC, increaseSaga); // 모든 INCREASE_ASYNC 액션을 처리
    yield takeLatest(DECREASE_ASYNC, decreaseSaga); // 가장 마지막으로 디스패치된 DECREASE_ASYNC 액션만을 처리
}

/* 초기 상태 선언 */
// const initialState = {
//     number: 0,
//     diff: 1
// };

const initialState = 0;

export default function counter(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return state + 1;
        case DECREASE:
            return state - 1;
        default:
            return state;
    }
}

/* 리듀서 선언 */
// 리듀서는 export default 로 내보내주세요.
// export default function counter(state = initialState, action) {
//     switch (action.type) {
//         case SET_DIFF:
//             return {
//                 ...state,
//                 diff: action.diff
//             };
//         case INCREASE:
//             return {
//                 ...state,
//                 number: state.number + state.diff
//             };
//         case DECREASE:
//             return {
//                 ...state,
//                 number: state.number - state.diff
//             };
//         default:
//             return state;
//     }
// }