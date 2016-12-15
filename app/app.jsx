var React = require('react'),
    ReactDOM = require('react-dom'),
    {Provider} = require('react-redux'),
    {Route, Router, IndexRoute, hashHistory} = require('react-router'),
    TodoApp = require('TodoApp'),
    actions = require('actions'),
    store = require('configureStore').configure();

// subscribe for changes
store.subscribe(() => {
  console.log('New state', store.getState());
});

// dispatch actions
store.dispatch(actions.addTodo('Clean the yard'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleShowCompleted());

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);
