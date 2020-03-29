import React, { useState } from 'react'
import { Button, Input, Text, Right, Item, Label, Card, CardItem, Body, Left, Icon } from 'native-base'
import AppButton from './AppButton'
import GlobalStyles from '../../utils/GlobalStyles'

const AppForm = ({ title, fields, onCancel, onSubmit }) => {
    const [form, setForm] = useState({})

    const onFormChange = (val) => {
        setForm(val)
    }

    return (<Card style={{ flex: 0 }}>
        <CardItem>
            <Left>
                <Text style={GlobalStyles.sectionTitle}>{title}</Text>
            </Left>
        </CardItem>
        <CardItem>
            <Body>
                {fields.length > 0 && renderFields(fields, onFormChange)}
            </Body>
        </CardItem>
        <CardItem>
            <Left>
                <AppButton name="Accept" onPress={() => onSubmit(form)} icon="md-save" />
            </Left>
            <Right>
                <AppButton name="Cancel" onPress={() => onCancel(form)} icon="md-close-circle" />
            </Right>
        </CardItem>
    </Card >)
}

const renderFields = (fields, onChange) => {

    let initialForm = {}
    fields.forEach(f => {
        initialForm[f.name] = ""
    })
    const [form, setForm] = useState(initialForm)

    const handleChange = (val, name) => {
        let current = form
        current[name] = val
        setForm(current)
        onChange(form)
    }

    return fields.map((field, i) => <Item key={i} floatingLabel>
        <Label>{field.placeholder}</Label>
        <Input onChangeText={(val) => handleChange(val, field.name)} />
    </Item>)

}

export default AppForm