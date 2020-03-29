import React from 'react'
import { View, Text } from 'react-native'
import { Button, Icon } from 'native-base'
import { connect } from 'react-redux'

import GlobalStyles from '../../../utils/GlobalStyles'
import AppHeader from '../../partials/AppHeader'

const DashboardScreen = ({ navigation, user, onSignOut }) => {
    const onExit = () => {
        onSignOut()
    }
    return (<View style={GlobalStyles.body}>
        <AppHeader navigation={navigation} title="Dashboard"/>
        <Text style={GlobalStyles.sectionTitle}>Welcome {user.email}</Text>
    </View>)
}
const mapPropsToState = (state) => {
    return {
        user: state.auth.user
    }
}
const mapDispatchToState = (dispatch) => {
    return {
        onSignOut: () => dispatch(SignOut())
    }
}

export default connect(mapPropsToState, mapDispatchToState)(DashboardScreen)