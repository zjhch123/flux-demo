import {ReduceStore} from 'flux/utils'
import ButtonActionTypes from '../Actions/ButtonActionTypes'
import AppDispatcher from '../Dispatcher/AppDispatcher'
import Immutable from 'immutable'

class ListStore extends ReduceStore {
  constructor() {
    super(AppDispatcher)
  }
  getInitialState() {
    return Immutable.Map()
  }
  reduce(state, action) {
    switch(action.type) {
      case ButtonActionTypes.GET_DATA_START:
        return state.set("loading", true)
      case ButtonActionTypes.GET_DATA_OVER:
        return state.set("loading", false).set("data", action.data.items)
      default:
        return state
    }
  }
}


export default new ListStore()