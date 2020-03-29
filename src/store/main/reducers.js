import { SHOW_ALERT, HIDE_ALERT, HIDE_LOADING, SHOW_LOADING } from './types'
const initialState = {
    isLoading: false,
    message: "",
    alert: {
        type: "",
        message: ""
    }
}
const mainReducer = (state = initialState, action) => {
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

        default:
            return state;
    }
}

export default mainReducer