import React from "react"
import HOC from './HOC'

//create component using class
class Fun extends React.Component {
    render() {
        return (<div>
            <h1 className="mk" style={{ color: "red" }}>name is: {this.props.name}</h1>
            <p>
                hi! i'm mk. i am learning react.
        </p>

        </div>);
    }
}

//create component using stateless function
// const Fun=()=>{
//     return <div>
//         <h1>hi</h1>
//     </div>
// }
Fun=HOC(Fun);
export default Fun