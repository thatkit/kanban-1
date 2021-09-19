import React from 'react'

export const Board = (props) => {
    return (
        <section className="col-4">
            <h2 className="d-flex justify-content-center">
                {props.heading}
            </h2>
        </section>
    )
}
