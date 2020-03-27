import { firebase } from '@react-native-firebase/auth'
import { handleError } from '../utils/UtilitiesError'
import { PrintObject } from '../utils/ObjectPrinter'

export default class AuthService {
    getCurrentUser = () => {
        let auth = firebase.auth()
        console.warn("update")
        console.warn(PrintObject(auth))
        return null
    }

    createUserWithEmail = (email, pass) => {
        return firebase.auth().createUserWithEmailAndPassword(email, pass)
            .then(resp => resp.user)
            .catch(err => handleError(err));
    }

    signIn = (email, pass) => {
        return firebase.auth().signInWithEmailAndPassword(email, pass)
            .then(resp => resp.user)
            .catch(err => handleError(err));
    }

    signInWithGoogle = () => {
        return firebase.auth().signInWithGoogle()
            .then(resp => resp)
            .catch(err => handleError(err))
    }
}
