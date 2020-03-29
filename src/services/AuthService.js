import { firebase } from '@react-native-firebase/auth'
import { handleError } from '../utils/UtilitiesError'

export default class AuthService {
    getCurrentUser = () => {
        return firebase.auth().currentUser
    }

    createUserWithEmail = (email, pass) => {
        return firebase.auth().createUserWithEmailAndPassword(email, pass)
            .then(resp => resp.user)
            .catch(err => handleError(err))
    }

    signIn = (email, pass) => {
        return firebase.auth().signInWithEmailAndPassword(email, pass)
            .then(resp => resp.user)
            .catch(err => handleError(err))
    }

    signInWithGoogle = () => {
        return firebase.auth().signInWithGoogle()
            .then(resp => resp)
            .catch(err => handleError(err))
    }

    signOut = () => {
        return firebase.auth().signOut()
    }
}
