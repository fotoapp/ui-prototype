/** @jsx React.DOM */

var React = require('react');
var ReactPropTypes = React.PropTypes;

var Photo = React.createClass({
  propTypes: {
    url: ReactPropTypes.string
  },

  render: function(){
    var divStyle = {
      backgroundImage: 'url(' + this.props.url + ')'
    };

    return (
      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 photo" style={divStyle}></div>
    );
  }
});

module.exports = Photo;
