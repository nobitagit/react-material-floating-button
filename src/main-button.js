'use strict';

var React = require('react');

var MainButton = React.createClass({
  handleClick: function() {
    this.props.onToggleMenu();
  },
  render: function(){
    var iconResting = 'mfb-component__main-icon--resting ' + this.props.iconResting,
        iconActive = 'mfb-component__main-icon--active ' + this.props.iconActive;
    if(this.props.label){
      return (
        <a href={this.props.href} className="mfb-component__button--main" onClick={this.handleClick} data-mfb-label={this.props.label}>
          <i className={iconResting}></i>
          <i className={iconActive}></i>
        </a>
      );
    } else {
      return (
        <a href="#" className="mfb-component__button--main" onClick={this.handleClick}>
          <i className={iconResting}></i>
          <i className={iconActive}></i>
        </a>
      );
    }
  }
});

module.exports = MainButton;
