import { SHOW_LOADING, HIDE_ALERT, HIDE_LOADING, SHOW_ALERT, RESET_STATE } from "./types"


export const ShowLoading = (message) => {
    return async (dispatch) => {
        dispatch({
            type: SHOW_LOADING,
            payload: {
                message
            }
        })
    }
}

export const HideLoading = () => {
    return async (dispatch) => {
        dispatch({
            type: HIDE_LOADING
        })
    }
}

export const ShowAlert = (type, message) => {
    return async (dispatch) => {
        dispatch({
            type: SHOW_ALERT,
            payload: {
                type,
                message
            }
        })
    }
}

export const HideAlert = () => {
    return async (dispatch) => {
        dispatch({
            type: HIDE_ALERT,
            payload: {
                type: "primary",
                message: ""
            }
        })
    }
}
export const ResetState = () => {
    return async (dispatch) => {
        dispatch({
            type: RESET_STATE
        })
    }
}