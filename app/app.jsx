var React = require('react'),
    ReactDOM = require('react-dom'),
    {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <p>Boilerplate 3 Project</p>
  document.getElementById('app')
);
