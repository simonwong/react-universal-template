import { combineReducers } from 'redux'

const initialState = {
    isFetching: false,
    activeMenu: 'HOME',
}

export const actionTypes = {
    FETCH_START: 'FETCH_START',
    FETCH_END: 'FETCH_END',
    CHANGE_MENU: 'CHANGE_MENU',
}

export const actions = {
    change_menu: menu => ({
        type: 'CHANGE_MENU',
        payload: menu,
    }),
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
    case actionTypes.CHANGE_MENU:
        return {
            ...state,
            activeMenu: action.payload,
        }
    default:
        return state
    }
}

export default combineReducers({
    global: reducer,
})
