import React, { useState } from 'react'
import { Container, H1, Form, Item, Label, Input, Button, Text } from "native-base"
import GlobalStyles from '../../../utils/GlobalStyles'
import Box from '../../partials/Box'
import AuthService from '../../../services/AuthService'
import { PrintObject } from '../../../utils/ObjectPrinter'

const LoginScreen = ({ navigation, setLoading }) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("")
    const [message, setMessage] = useState("")

    const handleSignIn = () => {
        setMessage("Sending..")
        new AuthService().signIn(email, pass).then(resp => {
            if (typeof (resp) === "string")
                setMessage(resp)
            else navigation.navigate("Dashboard")
        })
    }
    return <Container style={GlobalStyles.body}>
        <Box height={150}>
            <H1 style={GlobalStyles.title}>Login here!</H1>
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
                <Button onPress={() => handleSignIn()}>
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

export default LoginScreen