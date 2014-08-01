/** @jsx React.DOM */

var Header = require('./Header.react');
var Browser = require('./Browser.react');
var Footer = require('./Footer.react');
var React = require('react');

var FotoApp = React.createClass({
  render: function() {
  	return (
      <div>
        <Header />
        <Browser />
        <Footer />
      </div>
  	);
  }
});

module.exports = FotoApp;
