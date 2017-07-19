import React from 'react'
export default function Button(props) {
  return (
    <div>
      <ul>
        {props.items.map((item) => (<li key={Math.random()}>{item}</li>))}
      </ul>
      <button onClick={props.onClick}>click me</button>
    </div>
  )
}