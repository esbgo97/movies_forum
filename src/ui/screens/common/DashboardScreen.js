import React, { Component } from 'react'
import { View,Text } from 'react-native'
import GlobalStyles from '../../../utils/GlobalStyles'
import AuthServices from '../../../services/AuthServices'

export default class DashboardScreen extends Component {
    state = {
        user: {}
    }

    componentDidMount() {
        // AuthServices().getCurrentUser().then(user => this.setState({ user }))
    }

    render() {
        return (<View style={GlobalStyles.body}>
            <Text>Welcome {this.state.user?.username}</Text>
        </View>)
    }
}