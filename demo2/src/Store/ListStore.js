import {Store} from 'flux/utils'
import ButtonActionTypes from '../Actions/ButtonActionTypes'
import AppDispatcher from '../Dispatcher/AppDispatcher'

class ListStore extends Store {

  constructor() {
    super(AppDispatcher)
    this.items = []
  }

  getAll() {
    return this.items
  }

  addNewItemHandler(text) {
    this.items.push(text)
  }

  __onDispatch(action) {
    switch(action.type) {
      case ButtonActionTypes.ADD_NEW_ITEM:
        this.addNewItemHandler(action.text)
        this.__emitChange()
        break;
      default:
        // op
    }
  }
  
}


export default new ListStore()