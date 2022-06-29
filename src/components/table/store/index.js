import Watcher from './watcher'

Watcher.prototype.mutations = {
  insertColumns (states, column, index) {
    let array = states._columns
    array.push(column)
  }
}

Watcher.prototype.commit = function(name, ...args){
  const _this = this
  const mutations = _this.mutations
  if (mutations[name]) {
    mutations[name].apply(_this, [_this.states].concat(args))
  }
}


export function createStore (table, initialState = {}) {
  if (table) {
    const store = new Watcher()
    store.table = table
    Object.keys(initialState).map(key => {
      store.states[key] = initialState[key]
    })
    return store
  }
}