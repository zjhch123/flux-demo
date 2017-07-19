import React from 'react'
import Button from './Button'
import ButtonActions from '../Actions/ButtonActions'
import ListStore from '../Store/ListStore'

export default class ButtonController extends React.Component {

  constructor(props) {
    super(props)
    this.addNewItem = this.addNewItem.bind(this)
    this._onChange = this._onChange.bind(this)
    this.state = {
      items: ListStore.getAll()
    }
  }

  addNewItem() {
    ButtonActions.addNewItem('new item')
  }

  _onChange() {
    this.setState({
      items: ListStore.getAll()
    })
  }

  componentDidMount() {
    ListStore.addChangeListener(this._onChange)
  }

  componentWillUnmount() {
    ListStore.removeChangeListener(this._onChange)
  }

  render() {
    return (
      <Button 
        items={this.state.items} 
        onClick={this.addNewItem} />
    )
  }
}