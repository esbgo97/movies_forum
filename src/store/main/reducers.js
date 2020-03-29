import { SHOW_ALERT, HIDE_ALERT, HIDE_LOADING, SHOW_LOADING, RESET_STATE } from './types'
import { appInitialState } from '../../utils/StatePersistent'

const mainReducer = (state = appInitialState.main, action) => {
    switch (action.type) {
        case SHOW_LOADING:
            return {
                ...state,
                isLoading: true,
                message: action.payload
            }
        case HIDE_LOADING:
            return {
                ...state,
                isLoading: false,
                message: ""
            }
        case SHOW_ALERT:
            return {
                ...state,
                alert: action.payload
            }
        case HIDE_ALERT:
            return {
                ...state,
                alert: { type: "", message: "" }
            }
        case RESET_STATE:
            return appInitialState.main
            
        default:
            return state;
    }
}

export default mainReducer