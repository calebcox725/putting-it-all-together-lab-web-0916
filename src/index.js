import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/app'

import { createStore } from './store'
import blackjackReducer from './reducers/blackjack_reducer'
import { fetchDeck, setAICards, setUserCards, hitAI, hitUser } from './actions/blackjack_actions'

const store = createStore(blackjackReducer)

store.dispatch(fetchDeck())
store.dispatch(setAICards(store.getState()))
store.dispatch(setUserCards(store.getState()))

function render() {
  ReactDOM.render(<App store={store}/>, document.getElementById('container'))
}

render()
store.subscribe(render)

require('../test/index-test.js')  // Leave this in!
