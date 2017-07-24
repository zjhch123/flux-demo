import AppDispatcher from '../Dispatcher/AppDispatcher'
import ButtonActionTypes from './ButtonActionTypes'
import $ from 'jquery'

const ButtonActions = {
  getData: function(target) {
    AppDispatcher.dispatch({
      type: ButtonActionTypes.GET_DATA_START,
      data: '正在获取'
    })
    $.getJSON(`https://api.github.com/search/repositories?q=${target}&sort=stars`)
     .then(function(data) {
        AppDispatcher.dispatch({
          type: ButtonActionTypes.GET_DATA_OVER,
          data: data
        })
     })
  }
}

export default ButtonActions