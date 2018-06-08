import * as React from 'react';
import { connect } from 'react-redux';

class TodoList extends React.Component<{todos: any}> {

    render() {
        return (
            this.props.todos.map((item, index) => (
                <p key={index}>{ item }</p>
            ))
        )
    }
}

export default connect((state: {todo}) => {
    return {
        todos: state.todo
    }
})(TodoList);