import React from "react"
import Login from "./Login"
import Profile from "./Profile"
import {login,logout} from './actions.js';
import {connect} from 'react-redux';

class Main extends React.Component{

    render(){
        const {username,login,logout}=this.props;
        console.log({username,login,logout}); 
        return(
            username===""||username===undefined?<Login/>:<Profile/>
        );
    }
}

// export default Main;
const mapStateToProps=(state)=>{return state};

const mapDispatchToProps={
    login,logout
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);