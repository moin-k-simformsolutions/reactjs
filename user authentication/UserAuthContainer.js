import {connect} from 'react-redux';
import Main from './Main';

//actions
const login=(username)=>({
    type:"LOGIN",
    payload:username
})
const logout=()=>({
    type:"LOGOUT",
})

const mapStateToProps=(state)=>{return state};

const mapDispatchToProps={
    login,logout
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);