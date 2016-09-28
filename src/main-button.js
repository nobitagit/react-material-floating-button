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
      focus: false
    };
  },

  handleOnKeyDown: function handleOnKeyDown(evt) {
    
    if (evt.key === 'Enter' || evt.key === ' ') {
      evt.preventDefault();
      this.props.callBackParent('TOGGLE_MENU');
    }
    this.props.onKeyDown(evt, this.props.label);
  },

  render: function() {
    var iconResting = classnames('mfb-component__main-icon--resting', this.props.iconResting);
    var iconActive = classnames('mfb-component__main-icon--active', this.props.iconActive);
    var mainClass = classnames('mfb-component__button--main', this.props.className);
    var focus = this.props.focus;

    if(this.props.label){
      return (
        <a href={this.props.href} id="mfb-main-button" className={mainClass} onClick={this.props.onClick} onKeyDown={this.handleOnKeyDown} data-mfb-label={this.props.label} data-focusable={focus}>
          <i className={iconResting}></i>
          <i className={iconActive}></i>
        </a>
      );
    } else {
      return (
        <a href={this.props.href} id="mfb-main-button" className={mainClass} onClick={this.props.onClick} onKeyDown={this.handleOnKeyDown} data-focusable={focus}>
          <i className={iconResting}></i>
          <i className={iconActive}></i>
        </a>
      );
    }
  }
});

module.exports = MainButton;
