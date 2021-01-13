import React from 'react';
import "./friendsstyle.css"
import friendsimage from "./images/friends.jpg"

class Friends extends React.Component {
    render() {

        return (<div>
            <h1 style={{ textAlign: "center"}}>f.r.i.e.n.d.s</h1>
            <table border="1">
                <tr>
                    <th className="th_td">Name</th>
                    <th className="th_td">Gender</th>
                    <th className="th_td">Age</th>
                </tr>
                {this.getDetails()}
            </table>
            <img src={friendsimage} alt="friends" className="friendsImgStyle"></img>
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
                <td className="th_td">{details[i].name}</td>
                <td>{details[i].gender}</td>
                <td>{details[i].age}</td>
            </tr>);
        }
        return (output);
    }
}

export default Friends;