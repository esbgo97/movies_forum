import React from 'react'
import { Container, H1, Form, Item, Label, Input } from "native-base"
import GlobalStyles from '../../../utils/GlobalStyles'
import Box from '../../partials/Box'

const LoginScreen = () => {
    return <Container style={GlobalStyles.body}>
        <H1 style={GlobalStyles.title}>Sign up here!</H1>
        <Box height={50} />

        <Form>
            <Item floatingLabel>
                <Label>Username</Label>
                <Input />
            </Item>
        </Form>
    </Container>
}

export default LoginScreen