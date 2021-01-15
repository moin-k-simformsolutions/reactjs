import React, { useState } from "react";

// class Counter extends React.Component {
//     constructor(props) {
//         super(props);
//         // this.increment = this.increment.bind(this);
//         this.state = { count: 0 }
//     }
//     render() {
//         return (
//             <div style={{ textAlign: "center", marginTop: "20%" }}>
//                 <p style={{ fontSize: "30px",color:"white" }}>total count:{this.state.count}</p>
//                 <button onClick={()=>this.setState({ count: this.state.count + 1 })} style={{fontSize:"15px"}}>increment</button>
//             </div>
//         );
//     }

//     // increment=()=> {
//     //     this.setState({ count: this.state.count + 1 });
//     // }
// }



//===== use of hooks with stateless functions=====/
//because of hooks we can state in functional components 
const Counter = () => {
    const [count, incrementCount] = useState(0);
    return (
        <div style={{ textAlign: "center", marginTop: "20%" }}>
            <p style={{ fontSize: "30px", color: "white" }}>total count:{count}</p>
            <button onClick={() => incrementCount(count+1)} style={{ fontSize: "15px" }}>increment</button>
        </div>
    );
}

export default Counter;