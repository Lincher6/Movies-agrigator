import React from 'react'
import {useContent} from "../hooks/useContent";
import {BrowseContainer} from "../containers";

export const BrowsePage = (props) => {
    const series = useContent("series")

    return (
        <BrowseContainer/>
    )
}