'use strict';

var React = require('react');
var classnames = require('classnames');

var MainButton = React.createClass({
  getDefaultProps: function(){
    return {
      href: '#',
      onClick: function(){},
      iconResting: '',
      iconActive: '',
      label: null,
      iconRestingClass: '',
      iconActiveClass: ''
    };
  },
  render: function(){
    var iconRestingClass = classnames('mfb-component__main-icon--resting', this.props.iconRestingClass);
    var iconActiveClass = classnames('mfb-component__main-icon--active', this.props.iconActiveClass);
    var mainClass = classnames('mfb-component__button--main', this.props.className);
    if(this.props.label){
      return (
        <a href={this.props.href} className={mainClass} onClick={this.props.onClick} data-mfb-label={this.props.label}>
          <i className={iconRestingClass}>{this.props.iconResting}</i>
          <i className={iconActiveClass}>{this.props.iconActive}</i>
        </a>
      );
    } else {
      return (
        <a href={this.props.href} className={mainClass} onClick={this.props.onClick}>
          <i className={iconRestingClass}>{this.props.iconResting}</i>
          <i className={iconActiveClass}>{this.props.iconActive}</i>
        </a>
      );
    }
  }
});

module.exports = MainButton;
