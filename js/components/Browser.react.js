/** @jsx React.DOM */

var Photo = require('./Photo.react');
var React = require('react');

var allPhotos = [
  {
    "url": "http://cl.ly/image/0f2g0k3k0g1F/IMG_0893.JPG"
  },
  {
    "url": "http://cl.ly/image/3a3v0p030q3x/IMG_0328.JPG"
  },
  {
    "url": "http://cl.ly/image/1u1Z3f2v3a3r/IMG_0557.JPG"
  },
  {
    "url": "http://cl.ly/image/3z3s2Z1j150H/IMG_0519.JPG"
  },
  {
    "url": "http://cl.ly/image/2644083J352Z/IMG_0387.JPG"
  },
  {
    "url": "http://cl.ly/image/2P0q1v1g062r/IMG_0368.JPG"
  },
  {
    "url": "http://cl.ly/image/073X2t0L343v/IMG_0755.JPG"
  },
  {
    "url": "http://cl.ly/image/2N3f1H2F473v/IMG_0317.JPG"
  }
]

var Browser = React.createClass({
  render: function(){
    var photos = [];

    for (var index in allPhotos) {
      photos.push(<Photo url={allPhotos[index].url} />)
    }

    return (
      <div className="container-fluid">
        <div className="row">{photos}</div>
      </div>
    );
  }
});

module.exports = Browser;
