import * as React from 'react';

interface Props {
    name: string;
    enthusiasmLevel?: number;
}

interface State {
    isChecked: boolean;
    todos: string[];
}

const getExclamationMarks = (level: number) => {
    return Array(level + 1).join('!');
}

class Hello extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            isChecked: false,
            todos: []
        }
    }

    public onChange = () => {
        this.setState({
           isChecked: !this.state.isChecked 
        });
    }

    public addTodo = (e: any) => {
        if (e.key === 'Enter' && e.target.value) {
            this.setState({
                todos: [...this.state.todos, e.target.value]
            });
            e.target.value = '';
        }
    }

    public render() {
        const { name, enthusiasmLevel = 1 } = this.props;

        if (enthusiasmLevel <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
        }

        return (  
            <div>
                <p className="greeting">Hello {name + getExclamationMarks(enthusiasmLevel)}</p>
                <div>
                    <label htmlFor="" className="checkbox">
                        <input 
                            type="checkbox"
                            checked={this.state.isChecked}
                            onChange={this.onChange}
                        />
                        {this.state.isChecked ? 'on' : 'off'}
                    </label>
                </div>
                <div className="todos">
                    <input type="text" onKeyDown={this.addTodo} />
                    {this.state.todos.map((item, index) => (
                        <p className="each-todo" key={index}>{item}</p>
                    ))}
                </div>
            </div>
        )
    }
}

export default Hello;
