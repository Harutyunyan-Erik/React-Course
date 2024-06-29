import React from "react";

class Card extends React.Component{
    state = {
        count: 0,
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1,
        })
    }

    decrement = () => {
        this.setState({
            count: this.state.count - 1,
        })
    }

    render() {
       return (
        <div className="card_container">
            <h2>{this.props.title}</h2>

            <button onClick={this.decrement} disabled={this.state.count === 0}>-</button>
            <span>Count={this.state.count}</span>
            <button onClick={this.increment} disabled={this.state.count === 7}>+</button>
        </div>
       )
    }
}

export default Card

class ReactComponent{
    constructor() {
        this.state = {

        }
    }

    
    setState(props) {
        this.state = props
    }
}


const a = new ReactComponent();

a.setState({x: 10})