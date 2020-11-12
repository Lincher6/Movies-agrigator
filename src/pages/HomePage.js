import React from 'react'
import {
    FaqContainer,
    FeatureContainer,
    FooterContainer,
    HeaderContainer,
    JumbotronContainer,
} from "../containers";

export const HomePage = () => {
    return (
        <>
            <HeaderContainer>
                <FeatureContainer/>
            </HeaderContainer>
            <JumbotronContainer/>
            <FaqContainer/>
            <FooterContainer/>
        </>
    )
}