import React from 'react'
import StatisticLine from './StatisticLine'

const Statistics = ({ good, neutral, bad }) => {
    const total = good + neutral + bad
    const average = (good - bad) / total
    const positive = good / total * 100

    if (total === 0) {
        return (
            <div>
                <h1>statistics</h1>
                <p>No feedback given</p>
            </div>
        )
    }
    return (
        <div>
            <h1>statistics</h1>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={total} />
            <StatisticLine text="average" value={isNaN(average) ? 0 : average.toFixed(2)} />
            <StatisticLine text="positive" value={isNaN(positive) ? 0 : positive.toFixed(2) + '%'} />
        </div>
    )
}

export default Statistics