import AuthService from '../../services/AuthService'
import { handleError } from '../../utils/UtilitiesError'
import { SIGN_IN, SIGN_OUT, SIGN_UP } from './types'
import { SHOW_ALERT, HIDE_LOADING, SHOW_LOADING } from '../main/types'
import { ShowAlert } from '../main/actions'

export const SignIn = (email, pass) => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: SHOW_LOADING,
                payload: "Sign In"
            })
            const resp = await new AuthService().signIn(email, pass)
            if (typeof (resp) == "string" || resp == null) {
                dispatch(ShowAlert("warn", resp ?? "User not found"))
            } else {
                dispatch({
                    type: SIGN_IN,
                    payload: resp
                })
            }

        } catch (err) {
            dispatch(ShowAlert("error", handleError(err)))
        }
        finally {
            dispatch({
                type: HIDE_LOADING
            })
        }
    }
}

export const SignUp = (email, pass) => {
    return async (dispatch) => {
        dispatch({
            type: SHOW_LOADING,
            payload: "Signing Up.."
        })
        try {
            let resp = new AuthService().createUserWithEmail(email, pass)
            dispatch({
                type: SIGN_UP,
                payload: resp
            })
        }
        catch (err) {
            dispatch({
                type: SHOW_ALERT,
                payload: {
                    type: "error",
                    message: handleError(err)
                }
            })
        }
        finally {
            dispatch({
                type: HIDE_LOADING
            })
        }

    }
}

export const SignOut = () => {
    return async (dispatch) => {
        dispatch({ type: SHOW_LOADING, payload: "Sign out" })
        try {
            await new AuthService().signOut()
            dispatch({ type: SIGN_OUT })
        } catch (err) {
            dispatch({
                type: SHOW_ALERT,
                payload: handleError(err)
            })
        }
        finally {
            dispatch({ type: HIDE_LOADING })
        }
    }
}