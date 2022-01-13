import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'; // * BrowserRouter 불러오기

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer, {rootSaga} from "./modules";
import {composeWithDevTools} from 'redux-devtools-extension';
import {logger} from "redux-logger" // 리덕스 개발자 도구
import ReduxThunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware(); // 사가 미들웨어를 만듭니다.

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(
        ReduxThunk, sagaMiddleware, logger
    ))
);

sagaMiddleware.run(rootSaga); // 루트 사가를 실행해줍니다.

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
