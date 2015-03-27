'use strict';

var React = require('react');

var ChildButton = React.createClass({
  render: function(){
    var iconClass = 'mfb-component__child-icon ' + this.props.icon;
    return (
      <li>
        <a href={this.props.href}
           data-mfb-label={this.props.label}
           onClick={this.props.onClick}
           className="mfb-component__button--child">
          <i className={iconClass}></i>
        </a>
      </li>
    );
  }
});

module.exports = ChildButton;
