/** @jsx React.DOM */

var React = require('react');

var Header = React.createClass({
  render: function(){
    return (      
      <div className="container-fluid">
        <div className="page-header">
          <h1><span className="glyphicon glyphicon-picture"></span> FotoApp <small>UI Prototype</small></h1>
        </div>
      </div>
    );
  }
});

module.exports = Header;
