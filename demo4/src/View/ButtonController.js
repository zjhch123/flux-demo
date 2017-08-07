import React from 'react'
import Button from './Button'
import ButtonActions from '../Actions/ButtonActions'
import ListStore from '../Store/ListStore'
import {Container} from 'flux/utils'

class ButtonController extends React.Component {
  static getStores() {
    return [ListStore]
  }

  static calculateState(prevState) {
    return {
      items: ListStore.getState()
    }
  }

  addNewItem() {
    ButtonActions.addNewItem('new item')
  }
  
  render() {
    return (
      <Button 
        items={this.state.items} 
        onClick={this.addNewItem} />
    )
  }
}

export default Container.create(ButtonController)


