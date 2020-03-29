import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Container, H1, Form, Item, Label, Input, Button, Text } from "native-base"

import GlobalStyles from '../../../utils/GlobalStyles'
import Box from '../../partials/Box'
import { SignUp } from '../../../store/auth/actions'


const SignUpScreen = ({ navigation, onSignUp }) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("")

    const handleSignUp = () => {
        if (email == "" || pass == "") {
            alert("Complete the form!")
            return
        }
        onSignUp(email, pass)
    }

    const handleCancel = () => {
        navigation.navigate("Login")
    }

    return <Container style={GlobalStyles.body}>
        <Box height={150}>
            <H1 style={GlobalStyles.title}>Sign up here!</H1>
        </Box>
        <Form>
            <Item floatingLabel>
                <Label>Email</Label>
                <Input onChangeText={(val) => setEmail(val)} />
            </Item>
            <Item floatingLabel>
                <Label>Password</Label>
                <Input secureTextEntry
                    onChangeText={(val) => setPass(val)} />
            </Item>
            <Box height={100}>
                <Button onPress={handleSignUp}>
                    <Text>Sign Up</Text>
                </Button>
            </Box>
            <Box height={100}>
                <Text>Have an account?</Text>
                <Box height={10} />
                <Button onPress={handleCancel}>
                    <Text>Login Here</Text>
                </Button>
            </Box>

        </Form>
    </Container>
}
const mapStateToProps = (state) => {
    return {
        alert: state.main.alert
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSignUp: (user, pass) => dispatch(SignUp(user, pass))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen)