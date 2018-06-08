import * as React from 'react';

interface Props {
    name: string;
    age: number;
}

class Hello extends React.Component<Props, {count: number}> {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    handleClick = (e) => {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        return (
            <div onClick={ this.handleClick }>{`${this.props.name}: ${this.props.age}`}</div>
        )
    }
}

export default Hello;