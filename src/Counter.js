import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          clicks: 0,
          show: true
        };
    };

    // state has two properties, clicks and show

    Increment = () => {
        this.setState({ 
            clicks: this.state.clicks + 1 
        });
    }
    // adds 1 to the clicks state

    ToggleClick = () => {
        this.setState({ 
            show: !this.state.show 
        });
    }
    // flip our state show for opposite every time we click
    
    Reset() {
        this.setState({
          count: 0
        });
    };
          // change code above this line
    render() {
        return (
            <div>
                <button onClick={this.Increment}>Click to increase count by 1</button>
                <button onClick={this.Reset}>Reset Counter</button>
                <button onClick={this.ToggleClick}>
                    { this.state.show ? 'Hide number' : 'Show number' }
                </button>
                { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
            </div>
        )
    }
}

export default Counter; 