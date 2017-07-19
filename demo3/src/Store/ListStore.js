import {ReduceStore} from 'flux/utils'
import ButtonActionTypes from '../Actions/ButtonActionTypes'
import AppDispatcher from '../Dispatcher/AppDispatcher'
import Immutable from 'immutable'

class ListStore extends ReduceStore {

  constructor() {
    super(AppDispatcher)
  }

  getInitialState() {
    return Immutable.List()
  }

  reduce(state, action) {
    switch(action.type) {
      case ButtonActionTypes.ADD_NEW_ITEM:
        return state.push(action.text)
      default:
        return state
    }
  }
  
}


export default new ListStore()