/**
 * Handling a creating of reducers.
 * (allows us not to need to create switch statements all the time)
 * params:
 *  - initialState - ...
 *  - handlers - are different action types we are listening for
 */
export default function createReducer(initialState, handlers) {
    return function reducer(state = initialState, action) {
        if(handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action);
        } else {
            return state;
        }
    }
}