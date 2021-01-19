import { connect } from 'react-redux';
import Reduxapp from "./reduxapp"

//action creator
const increment = () => ({
    type: "INCREMENT",
})
const decrement = () => ({
    type: "DECREMENT",
})
const reset = () => ({
    type: "RESET",
})


const mapStateToProps = (state) => { return state };
// const mapDispatchToProps = (dispatch) => {
//     return {
//         increment() {
//             dispatch(incrementValue())
//         },
//         decrement(){
//             dispatch(decrementValue())
//         }
//     }
// }
const mapDispatchToProps = {
    increment, decrement, reset
}

export default connect(mapStateToProps, mapDispatchToProps)(Reduxapp);