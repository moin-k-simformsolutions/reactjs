import React from "react";
import './profileStyle.css'
import {connect} from 'react-redux';
class Profile extends React.Component{
    render(){
        const {username,logout}=this.props;
        return(
            <div className="profileContainer">
                <p className="profileHeading">profile</p><br/><br/>
                <p className="userName"> welcome back , {username}</p><br/><br/>
                <button onClick={logout} className="logoutButton">logout</button>
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

export default connect(mapStateToProps,mapDispatchToProps)(Profile);

