import React from "react";
import "./reduxappstyle.css"
class Reduxapp extends React.Component {
    constructor(){
        super();
        this.state={
            jumpBy:1
        }
    }
    render() {
        const { count, increment, decrement, reset } = this.props;
        return (
            <div className="reduxappcontainer">
                <p className="number">{count}</p>
                <button className="incrementButton" onClick={()=>increment(this.state.jumpBy)}>increse</button><br /><br />
                <button className="decrementButton" onClick={()=>decrement(this.state.jumpBy)}>decrese</button><br /><br />
                <button className="resetButton" onClick={count===0?()=>alert("already 0"):reset}>reset</button><br/><br/>
                <p>jump by</p>
                <select value={this.state.jumpBy} className="dropdown" onChange={e=>this.setState({jumpBy:e.target.value})}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
        );
    }
}


export default Reduxapp;