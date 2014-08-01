/** @jsx React.DOM */

var Header = require('./Header.react');
var React = require('react');

var FotoApp = React.createClass({
  render: function() {
  	return (
      <div className="container-fluid">
        <Header />
      </div>
  	);
  }
});

module.exports = FotoApp;
