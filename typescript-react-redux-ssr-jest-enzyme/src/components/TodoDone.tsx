import * as React from 'react';
import { connect } from 'react-redux';

export const TodoDone = ({todos}) => {
    return (
        <div className="todo">
            {
                todos.filter(item => item.done).map(item => (
                    <p className="each-todo-done" key={item.id}>{item.text}</p>
                ))
            }
        </div>   
    )
}

export default connect((state: {todo: object[]}) => {
    return {
        todos: state.todo
    }   
})(TodoDone);


