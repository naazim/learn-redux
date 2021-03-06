var redux = require('redux');

var stateDefault = {
  searchText: '',
  completed: 'false',
  todos: []
};

var reducer = (state = stateDefault, action) => {
  return state;
};

var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('Current State = ', currentState);
