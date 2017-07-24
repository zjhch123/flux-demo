import React from 'react'
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
    this.getData = this.getData.bind(this)
  }

  getData() {
    ButtonActions.getData(this.refs.search.value || 'javascript')
  }
  
  render() {
    return (
      <div>
        <input type="text" ref="search"
          placeholder="search" />
        <Button 
          onClick={this.getData} title="开始查询"/>
        <ItemList items={this.state.items} />
      </div>
    )
  }
}

export default Container.create(ViewController)