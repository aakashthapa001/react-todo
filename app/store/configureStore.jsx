var redux = require('redux'),
    {searchTextReducer, showCompletedReducer, todosReducer} = require('reducers');

// configure function
export var configure = () => {
  var reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  });

  // create Store
  var store = redux.createStore(reducer, redux.compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ));

  return store;
};
