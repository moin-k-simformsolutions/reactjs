import React from "react";
import "./reduxappstyle.css"
class Reduxapp extends React.Component {
    render() {
        const { count, increment, decrement, reset } = this.props;
        return (

            <div className="reduxappcontainer">
                <p>{count}</p>
                <button onClick={increment}>increse</button><br /><br />
                <button onClick={decrement}>decrese</button><br /><br />
                <button onClick={count===0?()=>alert("already 0"):reset}>reset</button>
            </div>

        );
    }
}


export default Reduxapp;