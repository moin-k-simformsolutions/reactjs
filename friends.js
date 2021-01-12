import React from 'react';
class Friends extends React.Component {
    render() {

        return (<div>
            <h1 style={{ textAlign: "center" }}>f.r.i.e.n.d.s</h1>
            <table border="1" style={{ marginLeft: "50%", transform: "translate(-50%)", fontSize: "20px", textAlign: "center" }}>
                <tr>
                    <th>name</th>
                    <th>gender</th>
                    <th>age</th>
                </tr>
                {/* <tr>
                    <td>{details[0].name}</td>
                    <td>{details[0].gender}</td>
                    <td>{details[0].age}</td>
                </tr> */}
                {this.getDetails()}

            </table>
        </div>);
    }

    getDetails() {
        var details = [
            {
                name: "chandler",
                gender: "male",
                age: "28"
            },
            {
                name: "joey",
                gender: "male",
                age: "29"
            },
            {
                name: "monica",
                gender: "female",
                age: "21"
            },
            {
                name: "ross",
                gender: "male",
                age: "20"
            },
            {
                name: "phoebe",
                gender: "female",
                age: "29"
            },
            {
                name: "rachel",
                gender: "female",
                age: "28"
            },

        ]

        var output = [];
        for (var i = 0; i < details.length; i++) {
            output.push(<tr>
                <td>{details[i].name}</td>
                <td>{details[i].gender}</td>
                <td>{details[i].age}</td>
            </tr>);
        }
        return (output);
    }
}

export default Friends;