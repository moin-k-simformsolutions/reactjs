import React from "react";
import "./loginstyle.css";
import { connect } from 'react-redux';
import {login,logout} from './actions.js';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            uname: "",
            password: ""
        }
    }

    render() {
        const { login } = this.props;
        return (
            <div className="loginContainer">
                <form onSubmit={(e)=>{e.preventDefault();this.state.uname === "" || this.state.password === "" ? alert("both fields are mandatory") : login(this.state.uname)}}>
                    <p className="loginHeading">login</p>
                    <input onChange={e => { this.setState({ uname: e.target.value }) }} type="text" className="userNameInput" placeholder="enter user name"></input><br /><br />
                    <input onChange={e => { this.setState({ password: e.target.value }) }} type="password" className="passwordInput" placeholder="enter password"></input><br /><br />
                    <button type="submit" className="loginButton">login</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => { return state };

const mapDispatchToProps = {
    login, logout
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
// export default Login;