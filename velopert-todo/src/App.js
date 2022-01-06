import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {createGlobalStyle} from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import {TodoProvider} from "./TodoContext";

const GlobalStyle = createGlobalStyle`
    body {
      background: #e9ecef;
    }
`;

function App() {
    return (
        <>
            <BrowserRouter>

            </BrowserRouter>
            <TodoProvider>
                <GlobalStyle/>
                <TodoTemplate>
                    <TodoHead/>
                    <TodoList/>
                    <TodoCreate/>
                </TodoTemplate>
            </TodoProvider>
        </>
    );
}

export default App;
