import React from "react";
import './profileStyle.css'
import {connect} from 'react-redux';
import {login,logout} from './actions.js';
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

const mapStateToProps=(state)=>{return state};

const mapDispatchToProps={
    login,logout
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile);

