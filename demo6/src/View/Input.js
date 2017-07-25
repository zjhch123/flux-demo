import React from 'react'

export default class Input extends React.Component {
  constructor(props) {
    super(props)
    this.handlerChange = this.handlerChange.bind(this)
  }

  handlerChange(e) {
    this.props.onChange(e.target.value)
  }

  render() {
    return (
      <input type="text" onChange={this.handlerChange} placeholder={this.props.placeholder}/>
    )
  }
}