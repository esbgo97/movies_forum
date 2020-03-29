import { SIGN_IN, SIGN_OUT, SIGN_UP } from './types'
import { SHOW_ALERT, HIDE_LOADING, SHOW_LOADING } from '../main/types'

import AuthService from '../../services/AuthService'
import { handleError } from '../../utils/UtilitiesError'
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

        try {
            dispatch({
                type: SHOW_LOADING,
                payload: "Signing Up"
            })

            let resp = await new AuthService().createUserWithEmail(email, pass)
            if (typeof (resp) == "string") {
                dispatch(ShowAlert("warn", resp))
            } else {
                dispatch({
                    type: SIGN_UP,
                    payload: resp
                })
            }
        }
        catch (err) {
            dispatch(ShowAlert("error", handleError(err)))
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

        try {
            dispatch({ type: SHOW_LOADING, payload: "Sign out" })
            await new AuthService().signOut()
        } catch (err) {
            dispatch(ShowAlert("error", handleError(err)))
        }
        finally {
            dispatch({ type: SIGN_OUT })
            dispatch({ type: HIDE_LOADING })
        }
    }
}