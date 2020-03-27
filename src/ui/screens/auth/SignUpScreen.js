import React, { useState } from 'react'
import { Container, H1, Form, Item, Label, Input, Button, Text } from "native-base"
import GlobalStyles from '../../../utils/GlobalStyles'
import Box from '../../partials/Box'
import AuthService from '../../../services/AuthService'

const SignUpScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("")
    const [message, setMessage] = useState("Registring new Account")

    const handleSignUp = () => {
        new AuthService().createUserWithEmail(email, pass).then(resp => {
            if (typeof (resp) === "string")
                setMessage(resp)
            else {
                setMessage("your account has been created!")
            }
        })
    }
    return <Container style={GlobalStyles.body}>
        <Box height={150}>
            <H1 style={GlobalStyles.title}>Sign up here!</H1>
            <Text>{message}</Text>
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
                <Button onPress={() => navigation.navigate("Login")}>
                    <Text>Login Here</Text>
                </Button>
            </Box>

        </Form>
    </Container>
}

export default SignUpScreen