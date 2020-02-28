import React from 'react'
import Button from './button.js'
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          clicks: 0,
          show: true
        };
    };

    // state has two properties, clicks and show

    increment = () => {
        this.setState({ 
            clicks: this.state.clicks + 1 
        });
    }
    // adds 1 to the clicks state

    toggleClick = () => {
        this.setState({ 
            show: !this.state.show 
        });
    }
    // flip our state show for opposite every time we click
    
    reset = () => {
        this.setState({
          clicks: 0
        });
    };
          // change code above this line
    render() {
        return (
            <div>
                <Button onClick={this.increment}>Click to increase count by 1</Button>
                <button onClick={this.reset}>Reset Counter</button>
                <button onClick={this.toggleClick}>
                    { this.state.show ? 'Hide number' : 'Show number' }
                </button>
                { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
            </div>
        )
    }
}

export default Counter; 