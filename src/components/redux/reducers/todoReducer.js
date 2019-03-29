const INITIAL_STATE = {

}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD":
            return state
        default:
            return state
    }
}