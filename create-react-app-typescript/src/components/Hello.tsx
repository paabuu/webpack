import * as React from 'react';
import * as actions from '../actions';
import { StoreState } from '../types/index';
import { connect, Dispatch } from 'react-redux';

interface Props {
    languageName: string;
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

const getExclamationMarks = (level: number) => {
    return Array(level + 1).join('!');
}

export class Hello extends React.Component<Props, object> {

    public render() {
        const { languageName, enthusiasmLevel = 1 } = this.props;

        if (enthusiasmLevel <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
        }

        return (  
            <div>
                <p className="greeting">Hello {languageName + getExclamationMarks(enthusiasmLevel)}</p>
                <button onClick={this.props.onDecrement}>-</button>
                <button onClick={this.props.onIncrement}>+</button>
            </div>
        )
    }
}

export function mapStateToProps({ enthusiasmLevel, languageName}: StoreState) {
    return {
        enthusiasmLevel,
        languageName
    };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
    return {
        onDecrement: () => dispatch(actions.decrementEnthusiasm()),
        onIncrement: () => dispatch(actions.incrementEnthusiasm())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello as any);
