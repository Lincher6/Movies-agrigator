import React from 'react'
import {useContent} from "../hooks/useContent";
import {BrowseContainer} from "../containers";
import selectionFilter from "../utils/selectionMap";

export const BrowsePage = () => {
    const series = useContent("series")
    const films = useContent("films")
    const slides = selectionFilter({ series, films })

    return (
        <BrowseContainer slides={slides}/>
    )
}