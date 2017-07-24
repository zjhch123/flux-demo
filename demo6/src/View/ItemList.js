import React from 'react'
import Item from './Item'
export default function ItemList(props) {
  return (
    <div>
      {
        props.items.map((item) => {
          return (<Item key={item.id} data={item} />)
        })
      }
    </div>
  )
}