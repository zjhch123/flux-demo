import {ReduceStore} from 'flux/utils'
import ButtonActionTypes from '../Actions/ButtonActionTypes'
import AppDispatcher from '../Dispatcher/AppDispatcher'
import Immutable from 'immutable'

const Counter =(function() {
  let id = 1
  return {
    increment: function() {
      return id++
    }
  }
})()

class ListStore extends ReduceStore {

  constructor() {
    super(AppDispatcher)
  }

  getInitialState() {
    return Immutable.List()
  }

  getAll() {
    return this.getState()
  }

  reduce(state, action) {
    switch(action.type) {
      case ButtonActionTypes.ADD_NEW_ITEM:
        const id = Counter.increment()
        return state.push({
          id: id, 
          text: action.text
        })
      default:
        return state
    }
  }
  
}


export default new ListStore()