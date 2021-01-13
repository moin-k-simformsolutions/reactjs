import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.increment = this.increment.bind(this);
        this.state = { count: 0 }
    }
    render() {
        return (
            <div style={{ textAlign: "center", marginTop: "20%" }}>
                <p style={{ fontSize: "30px" }}>total count:{this.state.count}</p>
                <button onClick={this.increment} style={{fontSize:"15px"}}>increment</button>
            </div>
        );
    }

    increment() {
        this.setState({ count: this.state.count + 1 });
    }
}

export default Counter;