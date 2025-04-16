import React from 'react'
import Button from './Button'

const GiveFeedBack = ({ handleGoodClick, handleNeutralClick, handleBadClick }) => {
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
    </div>
  )
}

export default GiveFeedBack