import React from 'react'

export default function Item(props) {
  return (
    <div>
      <h4><a href={props.html_url} target="_blank">{props.data.name}</a></h4>
    </div>
  )
}