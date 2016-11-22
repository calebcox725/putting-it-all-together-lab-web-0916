import React from 'react'
import UserBlackjack from './user_blackjack'
import { fetchDeck, setAICards, setUserCards, hitAI, hitUser } from '../actions/blackjack_actions'


export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.store = props.store

    this.calculateUserScore = this.calculateUserScore.bind(this)
    this.hitMe = this.hitMe.bind(this)
  }

  calculateUserScore() {
    let score = 0

    this.store.getState().userCards.forEach(card => {
      score += card.value
    })

    return score
  }

  hitMe(event) {
    event.preventDefault()
    this.store.dispatch(hitUser(this.store.getState()))
  }

  render() {
    return (
      <div>
        <UserBlackjack userCards={this.store.getState().userCards} score={this.calculateUserScore} hitMe={this.hitMe}/>
      </div>
    )
  }
}
