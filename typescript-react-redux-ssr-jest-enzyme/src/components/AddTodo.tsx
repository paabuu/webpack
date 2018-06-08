import * as React from 'react';
import { connect } from 'react-redux';

import * as actions from '../TodoRedux';

interface Props {
    addTodo: any
}

class AddTodo extends React.Component<Props> {

    public input;

    handleAddTodo = (e) => {
        if (!this.input.value) return;

        this.props.addTodo(this.input.value);
        this.input.value = '';
    }

    render() {
        return (
            <div>
                <input
                    type="text" 
                    ref={ input => this.input = input }
                />
                <button onClick={ this.handleAddTodo }>add</button>
            </div>
        )
    }
}

export default connect(null, dispatch => {
    return {
        addTodo: todo => dispatch(actions.addTodo(todo))
    }
})(AddTodo);