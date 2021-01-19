import React from "react";
class Reduxapp extends React.Component {
    render() {
        const { count, increment, decrement, reset } = this.props;
        console.log({ count, increment, decrement, reset });
        return (

            <div style={{ marginLeft: "50%", textAlign: "center", transform: "translate(-50%)", marginTop: "10%" }}>
                <p style={{ fontSize: "40px", color: "#ff843d" }}>{count}</p>
                <button onClick={increment} style={{ fontSize: "20px", border: "none", fontFamily: "impact", padding: "10px", minWidth: "100px" }}>increse</button><br /><br />
                <button onClick={decrement} style={{ fontSize: "20px", border: "none", fontFamily: "impact", padding: "10px", minWidth: "100px" }}>decrese</button><br /><br />
                <button onClick={count===0?()=>alert("already 0"):reset} style={{ fontSize: "20px", border: "none", fontFamily: "impact", padding: "10px", minWidth: "100px" }}>reset</button>
            </div>

        );
    }
}


export default Reduxapp;