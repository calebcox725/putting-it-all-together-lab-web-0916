import React from 'react'

export default (props) => {
  let cardList = props.userCards.map(card => {
    return (<li>{card.name}</li>)
  })

  return (
    <div>
      <h1>Player1</h1>
      <h2>Score: {props.score()}</h2>
      <ul>
        {cardList}
      </ul>
      <form onSubmit={props.hitMe}>
        <button type='submit'> Hit Me </button>
      </form>
      <form onSubmit={props.stay}>
        <button type='submit'> Stay </button>
      </form>
    </div>
  )
}
