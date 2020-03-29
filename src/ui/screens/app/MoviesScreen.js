import React, { Component } from 'react'
import { View, Text, ScrollView, RefreshControl } from 'react-native'
import Modal from 'react-native-modal'
import { connect } from 'react-redux'

import GlobalStyles, { palette } from '../../../utils/GlobalStyles'
import AppHeader from '../../partials/AppHeader'
import { List, ListItem, Fab, Icon, Form, Label, Input, Item, Button, Row, Col, Content, Toast } from 'native-base'
import MovieService from '../../../services/MovieService'

import { ShowAlert, ShowLoading, HideAlert } from '../../../store/main/actions'
import AppForm from '../../partials/AppForm'
import { handleError } from '../../../utils/UtilitiesError'

class MoviesScreen extends Component {
    state = {
        movies: [],
        showForm: false,
        loading: false
    }

    movieService = new MovieService()

    componentDidMount() {
        this.loadMovies()
    }

    loadMovies = () => {
        this.setState({ loading: true })
        this.movieService.getList()
            .then(resp => {
                if (typeof (resp) == "string") {
                    this.props.showAlert("warn", resp)
                } else {
                    this.setState({
                        movies: resp
                    })
                }
            })
            .catch(err => this.props.showAlert("error", handleError(err)))
            .finally(() => this.setState({ loading: false }))
    }

    toggleForm = () => {
        this.setState({ showForm: !this.state.showForm })
    }

    onSubmit = (movie) => {
        if (movie.name != "" && movie.description != "") {
            this.movieService.createMovie(movie.name, movie.description)
                .then((resp) => {
                    this.toggleForm()
                    this.props.showAlert("success", `Movie saved(${resp})`)
                    setTimeout(this.props.hideAlert, 5000)
                    this.loadMovies()
                }).catch(err => console.log(err))
        } else {
            alert("Please comple the form!")
        }
    }

    render() {
        const fields = [
            { name: "name", placeholder: "Name" },
            { name: "description", placeholder: "Description" },
        ]
        return (<View style={GlobalStyles.body}>
            <AppHeader navigation={this.props.navigation} title="Movies" />

            <ScrollView
                refreshControl={<RefreshControl refreshing={this.state.loading} onRefresh={this.loadMovies} />}>
                {this.state.movies.length > 0 ? this.renderMoviesList() :
                    <Text onPress={this.toggleForm}>No Movies found.!</Text>}
            </ScrollView>
            <Modal isVisible={this.state.showForm}
                onBackdropPress={this.toggleForm}
                onBackButtonPress={this.toggleForm}>
                <AppForm title="Add Movie"
                    fields={fields}
                    onSubmit={this.onSubmit}
                    onCancel={this.toggleForm} />

            </Modal>

            <Fab position="bottomRight" style={{backgroundColor:palette.primary}}>
                <Icon name="md-add-circle-outline"
                    onPress={this.toggleForm} />
            </Fab>
        </View>)
    }

    renderMoviesList = () => {
        return <List>
            {this.state.movies.map((movie, i) => {
                return (<ListItem key={i} button>
                    <Text>{movie.name} - {movie.description}</Text>
                </ListItem>)
            })}
        </List>
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        showAlert: (type, message) => dispatch(ShowAlert(type, message)),
        hideAlert: () => dispatch(HideAlert())
    }
}

export default connect(null, mapDispatchToProps)(MoviesScreen)