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
      case ButtonActionTypes.GET_DATA_START:
        return state.clear().push({
          name: action.data,
          id: -1
        })
      case ButtonActionTypes.GET_DATA_OVER:
        return state.clear().concat(action.data.items)
      default:
        return state
    }
  }
}


export default new ListStore()