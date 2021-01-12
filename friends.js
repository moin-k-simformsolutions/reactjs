import React from 'react';
class Friends extends React.Component {
    render() {
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
        var len = details.size;
        return (<div>
            <h1 style={{ textAlign: "center" }}>f.r.i.e.n.d.s</h1>
            <table border="1" style={{ marginLeft: "50%", transform: "translate(-50%)", fontSize: "20px", textAlign: "center" }}>
                <tr>
                    <th>name</th>
                    <th>gender</th>
                    <th>age</th>
                </tr>
                <tr>
                    <td>{details[0].name}</td>
                    <td>{details[0].gender}</td>
                    <td>{details[0].age}</td>
                </tr>
                
            </table>
        </div>);
    }

}

export default Friends;