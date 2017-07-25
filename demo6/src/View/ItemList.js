import React from 'react'
import Item from './Item'
export default function ItemList(props) {
  let isInitial = props.items.has("loading")
  return (
    <div>
      {isInitial && props.items.get("loading") && (<h4>正在加载...</h4>)}
      {isInitial && !props.items.get("loading") && props.items.get("data").map((item) => {return (<Item key={item.id} data={item} />)})}
    </div>
  )
}