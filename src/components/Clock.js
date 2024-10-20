import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
    //    this.clockTime =  setInterval(() => {this.tick()}, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.clockTime)
    }

    tick(){
        this.setState({ date: new Date() })
    }

    render() {
        return (
            <h1 className='heading'>
                <span className="text">{this.state.date.toLocaleTimeString(this.props.local)}</span>
            </h1>
        );
    }
}

export default Clock;