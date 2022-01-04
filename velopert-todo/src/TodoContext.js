import React, {useReducer, createContext, useContext, useRef} from 'react';
import axios from "axios";

const initialState = {loading: false, error: null, data: []}
const loadingState = {loading: true, error: null, data: []}

function todoReducer(state, action) {
    const {data} = state;
    switch (action.type) {
        case 'INIT_LOADING':
            return loadingState;
        case 'READ_ERROR':
            return {
                loading: false,
                data: [],
                error: action.error
            };
        case 'READ_SUCCESS' :
            return {
                ...state,
                loading: false,
                error: null,
                data: [...data, ...action.todos],
            };
        case 'CREATE':
            return {
                ...state,
                data: data.concat(action.todo)
            };
        case 'TOGGLE':
            return {
                ...state,
                data: data.map(todo => todo.id === action.id ? {...todo, done: !todo.done} : todo)
            };
        case 'REMOVE':
            return {
                ...state,
                data: data.filter(todo => todo.id !== action.id)
            };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({children}) {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const nextId = useRef(1);
    // let nextId = 1;

    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}

export function useTodoState() {
    const context = useContext(TodoStateContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

export function useTodoDispatch() {
    const context = useContext(TodoDispatchContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

export function useTodoNextId() {
    const context = useContext(TodoNextIdContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

export async function getTodos(dispatch, nextId) {
    dispatch({type: 'INIT_LOADING'});
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        nextId.current = response.data.length;
        dispatch({
            type: 'READ_SUCCESS',
            todos: response.data.map((v, i) => ({
                id: i,
                text: v.name,
                done: true,
            }))
        });
    } catch (error) {
        dispatch({type: 'READ_ERROR', error});
    }
};