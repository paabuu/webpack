import * as React from 'react';
import { connect } from 'react-redux';

import * as actions from '../TodoRedux';

interface Props {
    addTodo: any
}

class AddTodo extends React.Component<Props> {
    public input;

    handleAddTodo = () => {
        if (!this.input.value) return;

        this.props.addTodo(this.input.value);
        this.input.value = '';
    }

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.handleAddTodo();
        }
    }

    componentDidMount() {
        this.input.focus();
    }

    render() {
        return (
            <div className="add-todo">
                <input
                    type="text" 
                    ref={ input => this.input = input }
                    onKeyDown={ this.handleKeyDown }
                    placeholder="待办事项"
                />
            </div>
        )
    }
}

export default connect(null, dispatch => {
    return {
        addTodo: todo => dispatch(actions.addTodo(todo))
    }
})(AddTodo);