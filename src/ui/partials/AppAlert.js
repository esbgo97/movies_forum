import React from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import { Text } from 'native-base'
import GlobalStyles from '../../utils/GlobalStyles'

const AppAlert = ({ type, message }) => {

    return (<View style={GlobalStyles[type]}>
        <Text > {message}</Text>
    </View>)

}

const mapStateToProps = (state) => {
    return state.main.alert
}

export default connect(mapStateToProps)(AppAlert)