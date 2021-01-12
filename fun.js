import React from "react"
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

export default Fun