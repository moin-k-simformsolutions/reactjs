import React from "react"
import Login from "./Login"
import Profile from "./Profile"

class Main extends React.Component{

    render(){
        const {username,login,logout}=this.props;
        console.log({username,login,logout}); 
        return(
            username===""||username===undefined?<Login/>:<Profile/>
        );
    }
}

export default Main;