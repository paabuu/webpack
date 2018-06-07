import * as React from 'react';

interface Props {
    name: string;
    age: number;
}

class Hello extends React.Component<Props> {
    render() {
        return (
            <div>{`${this.props.name}: ${this.props.age}`}</div>
        )
    }
}

export default Hello;