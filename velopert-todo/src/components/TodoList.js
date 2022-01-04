import React, {useEffect} from 'react';
import styled from 'styled-components';
import TodoItem from "./TodoItem";
import {getTodos, useTodoDispatch, useTodoNextId, useTodoState} from '../TodoContext';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {

    const {loading, error, data: todos} = useTodoState();
    const dispatch = useTodoDispatch()
    const nextId = useTodoNextId();

    useEffect(() => {
        getTodos(dispatch, nextId);
    }, [dispatch, nextId]);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다 {error}</div>;
    if (!todos) return null;

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