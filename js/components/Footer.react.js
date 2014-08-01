/** @jsx React.DOM */

var React = require('react');

var Footer = React.createClass({
  render: function(){
    return (
      <div className="footer">
        <div className="container-fluid">
          <p className="text-muted">Copyright Jonathan Hoyt 2014</p>
        </div>
      </div>
    );
  }
});

module.exports = Footer;
