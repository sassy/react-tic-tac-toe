import React from 'react';

interface SquarePropsInterface {
    value: number;
}

class Square extends React.Component<SquarePropsInterface> {

    constructor(props: SquarePropsInterface) {
        super(props);
        this.state = {
            value: null,
        }
    }

    render() {
        return (
            <button
                className="square"
                onClick={() =>this.setState({value: 'X'})}
            >
                {this.props.value}
            </button>
        )
    }
}
export default Square;