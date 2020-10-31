import React from "react"
import faqs from "fixtures/faqs.json"
import {Accordion} from "../components/accordion";

export const FaqContainer = () => {
    return (
        <Accordion>
            <Accordion.Title>
                Frequently Asked Questions
            </Accordion.Title>
            {
                faqs.map(data => (
                    <Accordion.Item key={data.id}>
                        <Accordion.Header>
                            {data.header}
                        </Accordion.Header>
                        <Accordion.Body>
                            {data.body}
                        </Accordion.Body>
                    </Accordion.Item>
                ))
            }
        </Accordion>
    )
}