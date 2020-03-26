import React from 'react'
import { Container, Text } from "native-base"
import GlobalStyles from "../../../utils/GlobalStyles"
import { ActivityIndicator } from 'react-native'

const SplashScreen = ({ message }) => {
    return <Container style={GlobalStyles.body}>
        <ActivityIndicator size="large" />
        <Text>{message}</Text>
    </Container>
}

export default SplashScreen