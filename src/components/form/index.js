import React from 'react'
import {Base, Container, Error, Text, TextSmall, Title, Input, Link, Submit} from "./styles/form";


export const Form = ({ children, ...props }) => {
    return <Container { ...props }>{ children }</Container>
}

Form.Base = function FormBase({ children, ...props }) {
    return <Base { ...props }>{ children }</Base>
}

Form.Error = function FormError({ children, ...props }) {
    return <Error { ...props }>{ children }</Error>
}

Form.Title = function FormTitle({ children, ...props }) {
    return <Title { ...props }>{ children }</Title>
}

Form.Text = function FormText({ children, ...props }) {
    return <Text { ...props }>{ children }</Text>
}

Form.TextSmall = function FormTextSmall({ children, ...props }) {
    return <TextSmall { ...props }>{ children }</TextSmall>
}

Form.Input = function FormInput(props) {
    return <Input { ...props } />
}

Form.Link = function FormLink({ children, ...props }) {
    return <Link { ...props }>{ children }</Link>
}

Form.Submit = function FormSubmit({ children, ...props }) {
    return <Submit { ...props }>{ children }</Submit>
}