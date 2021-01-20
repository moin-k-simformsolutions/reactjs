import React from "react";
import "./loginstyle.css";
import {connect} from 'react-redux';

class Login extends React.Component{
    constructor(){
        super();
        this.state={
            uname:"",
            password:""
        }
    }

    render(){
        const {login}=this.props;
        return(
            <div className="loginContainer">
                <p className="loginHeading">login</p>
                <input onChange={e=>{this.setState({uname:e.target.value})}} type="text" className="userNameInput" placeholder="enter user name"></input><br/><br/>
                <input onChange={e=>{this.setState({password:e.target.value})}} type="password" className="passwordInput" placeholder="enter password"></input><br/><br/>
                <button onClick={()=>this.state.uname===""||this.state.password===""?alert("both fields are mandatory"):login(this.state.uname)} className="loginButton">login</button>
            </div>
        );
    }
}

//actions
const login=(username)=>({
    type:"LOGIN",
    payload:username,
})
const logout=()=>({
    type:"LOGOUT",
})

const mapStateToProps=(state)=>{return state};

const mapDispatchToProps={
    login,logout
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
// export default Login;