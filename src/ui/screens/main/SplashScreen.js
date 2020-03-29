import React from 'react'
import { ActivityIndicator } from 'react-native'
import { Container, Text, Button } from "native-base"

import GlobalStyles from "../../../utils/GlobalStyles"
import Box from '../../partials/Box'
import { connect } from 'react-redux'
import { ResetState } from '../../../store/main/actions'


const SplashScreen = ({ message,resetState }) => {
    return <Container style={GlobalStyles.body}>
        <Box>
            <ActivityIndicator size="large" />
            <Text>{message}</Text>
            <Button primary onPress={()=>{resetState()}}>
                <Text>Reset State</Text>
            </Button>
        </Box>
    </Container>
}
const mapStateToProps = state => {
    return {
        message: state.main.message
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        resetState: () => dispatch(ResetState())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SplashScreen)