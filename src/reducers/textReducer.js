const UPDATE_TEXT = 'UPDATE_TEXT';

function textReducer(state = '', action) {
    debugger
    switch (action.type) {
        case UPDATE_TEXT:
            return action.payload;
        default:
            return state;
    }
}

export default textReducer