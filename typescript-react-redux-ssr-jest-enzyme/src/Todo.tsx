import * as React from 'react';
import AddTodo from '@components/AddTodo';
import TodoList from '@components/TodoList';

class Todo extends React.Component {
    render() {
        return (
            <div>
                <AddTodo />
                <TodoList />
            </div>
        )
    }
}

export default Todo;