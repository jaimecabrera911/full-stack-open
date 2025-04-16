import React from 'react'

const GiveFeedBack = (props) => {
  return (
    <div>
        <h1>give feedback</h1>
        <button onClick={props.handleGoodClick}>good</button>
        <button onClick={props.handleNeutralClick}>neutral</button>
        <button onClick={props.handleBadClick}>bad</button>
    </div>
  )
}

export default GiveFeedBack