import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Container, H1, Form, Item, Label, Input, Button, Text } from "native-base"

import GlobalStyles from '../../../utils/GlobalStyles'
import Box from '../../partials/Box'
import AppAlert from '../../partials/AppAlert'
import { SignIn } from '../../../store/auth/actions'

const LoginScreen = ({ navigation, onSignIn, state }) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("")

    const onSubmit = () => {
        if(email =="" ||pass ==""){
            alert("Complete the form!")
            return
        }
        onSignIn(email, pass)
    }

    return <Container style={GlobalStyles.body}>
        <Box height={150}>
            <H1 style={GlobalStyles.title}>Login here!</H1>
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
                <Button onPress={onSubmit}>
                    <Text>Sign In</Text>
                </Button>
            </Box>
            <Box height={100}>
                <Text>Don't have account?</Text>
                <Box height={10} />
                <Button onPress={() => navigation.navigate("SignUp")}>
                    <Text>Sign Up Here</Text>
                </Button>
            </Box>

        </Form>
    </Container>
}
const mapStateToProps = (state) => {
    return { state }
}
const mapDispatchToProps = dispatch => {
    return {
        onSignIn: (user, pass) => dispatch(SignIn(user, pass))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)