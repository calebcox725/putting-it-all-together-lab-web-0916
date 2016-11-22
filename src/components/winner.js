import React from 'react'

export default (props) => {
  if (props.winner) {
    return <h1>Winner: {props.winner}</h1>
  } else {
    return <div></div>
  }
}
