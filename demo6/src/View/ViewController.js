import React from 'react'
import Input from './Input'
import Button from './Button'
import ItemList from './ItemList'
import ButtonActions from '../Actions/ButtonActions'
import ListStore from '../Store/ListStore'
import {Container} from 'flux/utils'

class ViewController extends React.Component {
  static getStores() {
    return [ListStore]
  }

  static calculateState(prevState) {
    return {
      items: ListStore.getState()
    }
  }

  constructor(props) {
    super(props)
    this.inputValue = ''
    this.getData = this.getData.bind(this)
    this.handlerChange = this.handlerChange.bind(this)
  }

  getData() {
    ButtonActions.getData(this.inputValue || 'javascript')
  }

  handlerChange(value) {
    this.inputValue = value
  }
  
  render() {
    return (
      <div>
        <Input onChange={this.handlerChange}
          placeholder="search" />
        <Button 
          onClick={this.getData} title="开始查询"/>
        <ItemList items={this.state.items} />
      </div>
    )
  }
}

export default Container.create(ViewController)