import {Dispatcher} from 'flux'
import ButtonActionTypes from '../Actions/ButtonActionTypes'
import ListStore from '../Store/ListStore'

const AppDispatcher = new Dispatcher()
AppDispatcher.register(function(action) {
  switch(action.type) {
    case ButtonActionTypes.ADD_NEW_ITEM:
      ListStore.addNewItemHandler(action.text)
      ListStore.emitChange()
      break;
    default:
      // op
  }
})
export default AppDispatcher