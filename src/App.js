import React from 'react'
import {JumbotronContainer} from "./containers";
import {FooterContainer} from "./containers/footerContainer";
import {FaqContainer} from "./containers/faqContainer";

export function App() {
    return (
        <>
            <JumbotronContainer/>
            <FaqContainer/>
            <FooterContainer/>
        </>
    )
}
