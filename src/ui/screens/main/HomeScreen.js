import React from 'react'
import { Container, Text, Button, H1 } from "native-base"

import GlobalStyles from '../../../utils/GlobalStyles'
import Box from '../../partials/Box'

const HomeScreen = ({ navigation }) => {
    return <Container style={GlobalStyles.body}>
        <Box height={200} >
            <H1 style={GlobalStyles.title}>MoFo!</H1>
            <Text>Welcome to best movies forum</Text>
        </Box>

        <Box height={100} >
            <Text>Have account?</Text>
            <Box height={10} />
            <Button onPress={() => { navigation.navigate("Login") }} >
                <Text>Log In Here</Text>
            </Button>
        </Box>

        <Box height={100} >
            <Text>New?</Text>
            <Box height={10} />
            <Button onPress={() => { navigation.navigate("SignUp") }} hasText>
                <Text>Sign Up,  is free!</Text>
            </Button>
        </Box>

        <Box height={400} >
            <Text >Powered by esbgo</Text>
        </Box>
    </Container>
}

export default HomeScreen