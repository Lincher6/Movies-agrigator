import React from 'react'
import {LockBody, Picture, ReleaseBody, Spinner} from "./styles/loader";

export const Loader = ({src, loading, ...props}) => {
    return loading
        ? <Spinner {...props}>
            <LockBody/>
            <Picture src={`/images/users/${src}.png`}/>
        </Spinner>
        : <ReleaseBody/>
}