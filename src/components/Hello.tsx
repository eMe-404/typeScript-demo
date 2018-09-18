import * as React from 'react';

export interface Props {
    name: string;
    enthusiasmLevel?: number;
}

interface State {
    currentEnthusiasm: number;
}
class Hello extends React.Component<Props, State> {
    //<Props, State> are the arguments we passing to the component 
    //Props is this.props and State is this.state
    constructor(props: Props) {
        super(props)
        this.state = {
            currentEnthusiasm: props.enthusiasmLevel || 1
        }
    }

    onIncrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm + 1)
    onDecrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm - 1)

    updateEnthusiasm = (currentEnthusiasm: number) => {
        this.setState({
            currentEnthusiasm
        })
    }

    render() {
        const { name } = this.props
        if (this.state.currentEnthusiasm <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
        }

        return (
            <div className="hello">
                <div className="greeting">
                    <h1> Hello {name + getExclamationMarks(this.state.currentEnthusiasm)}</h1>
                    <button onClick={this.onIncrement}>+</button>
                    <button onClick={this.onDecrement}>-</button>
                </div>
            </div>
        );
    }
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}