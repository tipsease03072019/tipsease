import React from 'react'

export default (props) => {
  return(
    <div>
      <h3>Card</h3>
      <p>{props.username}</p>
      <button onClick={() => props.selectUser(props.uid)}>Select</button>
    </div>
  )
}