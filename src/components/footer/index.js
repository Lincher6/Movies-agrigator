import React from "react"
import {Break, Column, Container, Link, Row, Text, Title} from "./styles/footer";

export const Footer = ({children, ...props}) => {
    return (
        <Container { ...props }>{children}</Container>
    )
}

Footer.Row = ({children, ...props}) => {
    return (
        <Row { ...props }>{children}</Row>
    )
}

Footer.Column = ({children, ...props}) => {
    return (
        <Column { ...props }>{children}</Column>
    )
}

Footer.Title = ({children, ...props}) => {
    return (
        <Title { ...props }>{children}</Title>
    )
}

Footer.Text = ({children, ...props}) => {
    return (
        <Text { ...props }>{children}</Text>
    )
}

Footer.Link = ({children, ...props}) => {
    return (
        <Link { ...props }>{children}</Link>
    )
}

Footer.Break = (props) => {
    return (
        <Break { ...props }/>
    )
}