import * as React from 'react';

export interface Props {
    name: string;
    enthusiasmLevel?: number;
}

class Hello extends React.Component<Props, Object> {
    //<Props, Object> are the arguments we passing to the component 
    //Props is this.props and Object is this.state

    render() {
        const { name, enthusiasmLevel = 1 } = this.props
        if (enthusiasmLevel <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
        }

        return (
            <div className="hello">
                <div className="greeting">
                    Hello {name + getExclamationMarks(enthusiasmLevel)}
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