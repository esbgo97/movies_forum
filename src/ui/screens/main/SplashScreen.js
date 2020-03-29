import React from 'react'
import { ActivityIndicator } from 'react-native'
import { Container, Text } from "native-base"

import GlobalStyles from "../../../utils/GlobalStyles"
import Box from '../../partials/Box'
import { connect } from 'react-redux'


const SplashScreen = ({ message }) => {
    return <Container style={GlobalStyles.body}>
        <Box>
            <ActivityIndicator size="large" />
            <Text>{message}</Text>
        </Box>
    </Container>
}
const mapStateToProps = state => {
    return {
        message: state.main.message
    }
}

export default connect(mapStateToProps)(SplashScreen)