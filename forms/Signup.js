import React, { useState } from "react";
import "./signupstyle.css"

const Signup = () => {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [age,setAge]=useState("");

    const createUser=()=>{
        var users=["abc","xyz"];
        if(username===""||password===""||age===""){
            alert("all fields are mendatory");
            return;
        }
        if(users.indexOf(username)!==-1){
            alert("username aleready exist");
        }
        else if(password.length<6){
            alert("password must be atleast 6 characters long");
        }
        else if(isNaN(Number(age))){
            alert("age must be a number");
        }
        else if(Number(age)<18){
            alert("user must be atleast 18 years old");
        }
        else{
            alert("sign up successfull");
        }
    }

    return (
        <div id="container">
            <form onSubmit={createUser}>
                <label htmlFor="username" className="labels">username<br/>
                    {/* ============================================================\/\/\/set value of state\/\/\/ */}
                    <input name="username" type="text" className="inputs" onChange={(e)=>setUsername(e.target.value)}></input>
                </label><br/>
                <label htmlFor="password" className="labels">password<br/>
                    <input name="password" type="password" className="inputs" onChange={(e)=>setPassword(e.target.value)}></input>
                </label><br/>
                <label htmlFor="age" className="labels">age<br/>
                    <input name="age" type="text" className="inputs"  onChange={(e)=>setAge(e.target.value)}></input>
                </label><br/>
                <input type="submit" value="signup" className="SubmitButton"/>

            </form>
        </div>
    );
}

export default Signup;