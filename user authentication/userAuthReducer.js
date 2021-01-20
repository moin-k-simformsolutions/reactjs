const initialState = {
    username: ""
}

const userAuthReducer = (state = initialState, action) => {
    // if(action.type==="LOGIN"){
    //     console.log(action.payload);
    //             return {
    //                 username: action.payload
    //             }
    // }
    // return state;
    switch (action.type) {
        case ("LOGIN"): {
            return {
                username: action.payload
            }
        }
        case ("LOGOUT"): {
            return {
                username: ""
            }
        }
        default: {
            return state;
        }
    }
}

export default userAuthReducer;