import React, { Component } from 'react'
import { View, Text } from 'react-native'
import GlobalStyles from '../../../utils/GlobalStyles'
import AuthService from '../../../services/AuthService'
import { PrintObject } from '../../../utils/ObjectPrinter'

export default class DashboardScreen extends Component {
    componentDidMount() {
        
    }

    render() {
        return (<View style={GlobalStyles.body}>
            <Text>Welcome {"asd"}</Text>
        </View>)
    }
}