import * as React from 'react';
import AddTodo from '@components/AddTodo';
import TodoList from '@components/TodoList';
import './todo.css';
import { TodoDone } from './components/TodoDone';

class Todo extends React.Component {
    render() {
        return (
            <div className="todo">
                <AddTodo />
                <TodoList />
            </div>
        )
    }
}

export default Todo;