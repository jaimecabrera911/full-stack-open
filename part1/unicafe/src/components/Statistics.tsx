import React from 'react'

const Statistics = (props) => {

    const total = props.good + props.neutral + props.bad
    const avergare = (props.good - props.bad) / (props.good + props.neutral + props.bad)
    const positive = props.good / (props.good + props.neutral + props.bad)
    return (
        <div>
            <h1>statistics</h1>
            <p>good {props.good}</p>
            <p>neutral {props.neutral}</p>
            <p>bad {props.bad}</p>
            <p>all {total}</p>
            <p>average {isNaN(avergare) ? 0 : avergare}</p>
            <p>positive {isNaN(positive) ? 0 : positive *100 + '%'}</p>
        </div>
    )
}

export default Statistics