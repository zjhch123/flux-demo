import assign from 'object-assign'
import {EventEmitter} from 'events'

const ListStore = assign({}, EventEmitter.prototype, {
  items: [],
  getAll: function() {
    return this.items
  },
  emitChange: function() {
    this.emit('change')
  },
  addNewItemHandler: function(text) {
    this.items.push(text)
  },
  addChangeListener: function(cb) {
    this.on('change', cb)
  },
  removeChangeListener: function(cb) {
    this.removeChangeListener('change', cb)
  }
})

export default ListStore