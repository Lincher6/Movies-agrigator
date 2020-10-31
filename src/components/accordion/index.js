import React, {createContext, useContext, useState} from "react"
import {Body, Header, Inner, Item, Container, Title} from "./styles/accordion";

const ToggleContext = createContext()

export const Accordion = ({children, ...props}) => {
    return (
        <Container>
            <Inner {...props}>
                {children}
            </Inner>
        </Container>
    )
}

Accordion.Title = ({children, ...props}) => {
    return (
        <Title {...props}>{children}</Title>
    )
}

Accordion.Item = function AccordionItem({children, ...props}) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <ToggleContext.Provider value={{isOpen, setIsOpen}}>
            <Item {...props}>{children}</Item>
        </ToggleContext.Provider>
    )
}

Accordion.Header = function AccordionHeader({children, ...props}) {
    const {isOpen, setIsOpen} = useContext(ToggleContext)

    return (
        <Header
            {...props}
            onClick={() => setIsOpen(prevState => !prevState)}
        >
            {children}
            {
                isOpen
                    ? <img src="/images/icons/close-slim.png" alt="Close"/>
                    : <img src="/images/icons/add.png" alt="Open"/>
            }
        </Header>
    )
}

Accordion.Body = function AccordionBody({children, ...props}) {
    const {isOpen, setIsOpen} = useContext(ToggleContext)

    return (
        isOpen && <Body {...props}>{children}</Body>
    )
}