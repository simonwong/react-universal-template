import { combineReducers } from 'redux'
import { reducer as article } from './article'

const initialState = {
    isFetching: false,
}

export const actionTypes = {
    FETCH_START: 'FETCH_START',
    FETCH_END: 'FETCH_END',
}

export const actions = {

}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
    case actionTypes.FETCH_START:
        return {
            ...state,
            isFetching: true,
        }
    case actionTypes.FETCH_END:
        return {
            ...state,
            isFetching: false,
        }
    default:
        return state
    }
}

export default combineReducers({
    global: reducer,
    article,
})
