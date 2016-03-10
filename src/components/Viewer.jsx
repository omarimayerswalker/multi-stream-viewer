'use strict';

var React = require('react');
var Search = require('./Search.jsx');
var StreamBox = require('./StreamBox.jsx');

var Viewer = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Multi Stream Viewer</h1>
        <Search/>
        <StreamBox/>
      </div>

    );
  }
});

module.exports = Viewer;
