import React from 'react'

export default (props) => {
  let cardList = props.aiCards.map(card => {
    return (<li>{card.name}</li>)
  })

  return (
    <div>
      <h1>Computer</h1>
      <h2>Score: {props.score()}</h2>
      <ul>
        {cardList}
      </ul>
    </div>
  )
}
