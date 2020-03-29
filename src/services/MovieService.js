import { firebase } from '@react-native-firebase/firestore'
import { handleError } from '../utils/UtilitiesError'

export default class MovieService {

    constructor() {
        this.firestore = firebase.firestore()
        this.collection = this.firestore.collection("movie")
    }

    createMovie = (name, description) => {
        let movie = {
            name,
            description,
            comments: [],
            scores: []
        }
        return this.collection
            .add(movie)
            .then(resp => resp.id)
            .catch(err => handleError(err));
    }

    getList = () => {
        return this.collection
            .get()
            .then(snap => snap.docs.map(s => s.data()))
            .catch(err => handleError(err))
    }

    addComment = (movieId, commentText, isGood) => {
        let user = firebase.auth().currentUser
        let comment = {
            userName: user.displayName ?? user.email,
            userUid: user.uid,
            text: commentText,
            movieId,
            isGood,
        }
        return this.firestore.collection("movie_comments")
            .add(comment)
            .then(res => res.id)
            .catch(err => handleError(err))
    }

    addScore = (movieId, scored) => {
        if (scored < 1 || scored > 5)
            return "Incorrect store range"

        let score = {
            userId: firebase.auth().currentUser.uid,
            movieId,
            score
        }

        return this.firestore.collection("movie_scores")
            .add(score)
            .then(res => res.id)
            .catch(err => handleError(err))
    }
}