import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import TodoItem from "./TodoItem";
import {useTodoDispatch, useTodoNextId, useTodoState} from '../TodoContext';
import axios from "axios";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {

    const todos = useTodoState();
    const dispatch = useTodoDispatch()
    const nextId = useTodoNextId();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchUsers = async () => {
        try {
            dispatch({type: 'INIT'});
            setError(null);
            setLoading(true);
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            dispatch({
                type: 'READ',
                todos: response.data.map((v, i) => ({
                    id: i,
                    text: v.name,
                    done: true,
                }))
            });
            nextId.current = response.data.length;
        } catch (e) {
            console.error(e)
            setError(e);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다 {error}</div>;

    return <TodoListBlock>
        {todos.map(todo => (
            <TodoItem
                key={todo.id}
                id={todo.id}
                text={todo.text}
                done={todo.done}
            />
        ))}
    </TodoListBlock>;
}

export default TodoList;