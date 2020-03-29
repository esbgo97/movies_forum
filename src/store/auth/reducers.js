import { SIGN_IN, SIGN_UP, SIGN_OUT } from "./types";
import { RESET_STATE } from '../main/types'
import { appInitialState } from '../../utils/StatePersistent'
const initialState = {
    isLogged: false,
    user: null
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                isLogged: true,
                user: action.payload
            }

        case SIGN_UP:
            return {
                ...state,
                isLogged: true,
                user: action.payload
            }

        case SIGN_OUT:
            return {
                ...state,
                isLogged: false,
                user: null
            }
        case RESET_STATE:
            return appInitialState.auth

        default:
            return state;
    }
}

export default authReducer