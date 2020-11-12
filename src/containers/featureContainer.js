import React from 'react'
import {Feature} from "../components/feature";
import {OptFormContainer} from "./optFormContainer";

export const FeatureContainer = () => {
    return (
        <Feature>
            <Feature.Title>
                Unlimited films, TV programmes and more.
            </Feature.Title>
            <Feature.SubTitle>
                Watch anywhere. Cancel at any time.
            </Feature.SubTitle>
            <OptFormContainer/>
        </Feature>
    )
}