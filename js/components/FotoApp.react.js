/** @jsx React.DOM */

var Header = require('./Header.react');
var Footer = require('./Footer.react');
var React = require('react');

var FotoApp = React.createClass({
  render: function() {
  	return (
      <div>
        <Header />
        <Footer />
      </div>
  	);
  }
});

module.exports = FotoApp;
