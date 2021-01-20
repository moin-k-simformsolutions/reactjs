const initialState = {
    count: 0
};
//reducer
const reducer = (state = initialState, action) => {
    if (action.type === "INCREMENT") {
        return {
            count: state.count + Number(action.payload)
        }
    }
    if (action.type === "DECREMENT") {
        return {
            count: state.count - action.payload
        }
    }
    if (action.type === "RESET") {
        return {
            count: 0
        }
    }

    return state;
}

export default reducer