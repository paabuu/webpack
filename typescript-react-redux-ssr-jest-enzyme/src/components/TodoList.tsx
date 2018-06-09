import * as React from 'react';
import { connect } from 'react-redux';
import * as classNames from 'classnames';
import { toggleTodo, Todo } from '../TodoRedux';
import * as TransitionGroup from 'react-addons-css-transition-group';

interface Props {
    todos: any,
    toggleTodo: any
}

class TodoList extends React.Component<Props> {
    render() {
        return (
            <TransitionGroup 
                transitionName="fade"
                transitionEnterTimeout={200}
                transitionLeaveTimeout={200}
            >     
                { this.props.todos.filter(item => !item.done).map((item) => (
                    <p 
                        key={item.id}
                        onClick={ () => this.props.toggleTodo(item) }
                        className="each-todo"
                    >{ item.text }</p>
                )) }
            </TransitionGroup>     
        )
    }
}

export default connect((state: {todo}) => {
    return {
        todos: state.todo
    }
}, dispatch => {
    return {
        toggleTodo: item => dispatch(toggleTodo(item))
    }
})(TodoList);