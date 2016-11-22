export function fetchDeck() {
  return {
    type: 'FETCH_DECK'
  }
}

export function setAICards(state) {
  let deck = [...state.deck]
  let cardOne = deck.splice(getCardIndex(deck), 1)[0]

  let cardTwo = deck.splice(getCardIndex(deck), 1)[0]

  return {
    type: 'SET_AI_CARDS',
    payload: {
      aiCards: [cardOne, cardTwo],
      deck: deck
    }
  }
}

export function setUserCards(state) {
  let deck = [...state.deck]
  let cardOne = deck.splice(getCardIndex(deck), 1)[0]

  let cardTwo = deck.splice(getCardIndex(deck), 1)[0]

  return {
    type: 'SET_USER_CARDS',
    payload: {
      userCards: [cardOne, cardTwo],
      deck: deck
    }
  }
}

export function hitAI(state) {
  let deck = [...state.deck]
  let card = deck.splice(getCardIndex(deck), 1)[0]

  return {
    type: 'HIT_AI',
    payload: card
  }
}

export function hitUser(state) {
  let deck = [...state.deck]
  let card = deck.splice(getCardIndex(deck), 1)[0]

  return {
    type: 'HIT_USER',
    payload: {
      card: card,
      deck: deck
    }
  }
}

function getCardIndex(deck) {
  let min = 0
  let max = deck.length
  let cardIndex =  Math.floor(Math.random() * (max - min)) + min

  return cardIndex
}
