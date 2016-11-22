import React from 'react'
import UserBlackjack from './user_blackjack'
import AIBlackjack from './ai_blackjack'
import Winner from './winner'
import { fetchDeck, setAICards, setUserCards, hitAI, hitUser } from '../actions/blackjack_actions'


export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.store = props.store

    this.calculateUserScore = this.calculateUserScore.bind(this)
    this.hitMe = this.hitMe.bind(this)
    this.stay = this.stay.bind(this)
    this.calculateAiScore = this.calculateAiScore.bind(this)
  }

  calculateUserScore() {
    let score = 0

    this.store.getState().userCards.forEach(card => {
      score += card.value
    })

    return score
  }

  calculateAiScore() {
    let score = 0

    this.store.getState().aiCards.forEach(card => {
      score += card.value
    })

    return score
  }


  hitMe(event) {
    event.preventDefault()
    this.store.dispatch(hitUser(this.store.getState()))
    // debugger
    if (this.calculateUserScore() > 21) {
      this.lose()
    }
  }

  stay(event) {
    event.preventDefault()

    while (this.calculateAiScore() <= this.calculateUserScore()) {
      this.store.dispatch(hitAI(this.store.getState()))
    }

    if (this.calculateAiScore() > 21) {
      this.win()
    } else {
      this.lose()
    }
  }

  lose() {
    this.store.dispatch({type: 'LOSE'})
  }

  win() {
    this.store.dispatch({type: 'WIN'})
  }

  render() {
    return (
      <div>
        <Winner
          winner={this.store.getState().winner}
        />
        <UserBlackjack
          userCards={this.store.getState().userCards}
          score={this.calculateUserScore}
          hitMe={this.hitMe}
          stay={this.stay}
        />
        <AIBlackjack
          aiCards={this.store.getState().aiCards}
          score={this.calculateAiScore}
        />
      </div>
    )
  }
}
