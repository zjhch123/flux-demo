import React from 'react'
export default function Button(props) {
  return (
    <div>
      <button onClick={props.onClick}>click me</button>
      <ul>
        {props.items.map((item) => (<li key={Math.random()}>{item.full_name || item}</li>))}
      </ul>
    </div>
  )
}