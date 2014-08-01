/** @jsx React.DOM */

var React = require('react');
var FotoApp = require('./components/FotoApp.react');

React.renderComponent(
  <FotoApp />,
  document.getElementById('fotoapp')
);
