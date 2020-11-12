import React from "react";
import { NavLink } from "react-router-dom";
import { Background, ButtonLink, Container, Logo } from "./styles/header";

export const Header = ({bg = true, children, ...props}) => {
    return bg
        ? <Background {...props}>{children}</Background>
        : {children}
}

Header.Frame = function HeaderFrame({ children, ...props }) {
    return <Container { ...props }>{ children }</Container>
}

Header.Logo = function HeaderLogo({ to, ...props }) {
    return (
        <NavLink to={to}>
            <Logo { ...props }/>
        </NavLink>
    )
}

Header.ButtonLink = function HeaderButtonLink({ children, ...props }) {
    return <ButtonLink { ...props }>{children}</ButtonLink>
}