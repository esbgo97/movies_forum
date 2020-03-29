import { SHOW_LOADING, HIDE_ALERT, HIDE_LOADING, SHOW_ALERT } from "./types"


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

export const HideAlert = (type, message) => {
    return async (dispatch) => {
        dispatch({
            type: HIDE_ALERT,
            payload: {
                type,
                message
            }
        })
    }
}
