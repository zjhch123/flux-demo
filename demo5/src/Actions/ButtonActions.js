import AppDispatcher from '../Dispatcher/AppDispatcher'
import ButtonActionTypes from './ButtonActionTypes'

const ButtonActions = {
  addNewItem: function(text) {
    AppDispatcher.dispatch({
      type: ButtonActionTypes.ADD_NEW_ITEM,
      text: text
    })
  }
}

export default ButtonActions