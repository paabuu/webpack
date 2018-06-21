import React, { PureComponent, Component } from 'react';
import { List, Map } from 'immutable';

function clone(obj) {
    let newObj = {};

    for(let i in obj) {
        if (obj[i] !== null && typeof obj[i] == 'object') {
            newObj[i] = clone(obj[i]);
        } else {
            newObj[i] = obj[i];
        }
    }

    return newObj;
}

class TestChildren extends PureComponent {
    render() {
        return (
            <p>{this.props.list.join(',')}-----{this.props.obj.get('name')}</p>
        )
    }
}

class Test extends Component {
    state = {
        list: List(['haha']),
        obj: Map({name: 'xixi'})
    }

    addListItem = () => {
        this.setState(({list}) => ({list: list.push('new item')}));
    }

    render() {
        return (
            <div>
                <button onClick={this.addListItem}>新增</button>
                <TestChildren list={this.state.list} obj={this.state.obj} />
            </div>
        )
    }

    componentDidMount() {
        const obj = {
            age: [1, 2, 3]
        };
       
        const newObj = Object.create(obj);
        console.log(newObj);
    }
}

export default Test;