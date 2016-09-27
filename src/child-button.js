'use strict';

var React = require('react');
var classnames = require('classnames');

var ChildButton = React.createClass({

  handleOnClick: function handleOnClick() {
    if(this.props.disabled === true)
    {
      return;
    }

    this.props.onClick();
  },

  handleOnKeyDown: function handleOnKeyDown(evt) {
    evt.preventDefault();

    if(this.props.disabled === true) {
      return;
    }

    if (evt.key === 'Enter' || evt.key === ' ') {
      this.props.callBackParent('TOGGLE_MENU');
    }
    this.props.onKeyDown(evt, this.props.label);
  },

  render: function(){
    var iconClass = classnames('mfb-component__child-icon', this.props.icon);
    var className = classnames('mfb-component__button--child',
                               this.props.className,
                               {"mfb-component__button--disabled": this.props.disabled});
    return (
      <li>
        <a href={this.props.href}
           data-mfb-label={this.props.label}
           onClick={this.handleOnClick}
           className={className}
           onKeyDown={this.props.handleOnKeyDown}
           data-focusable={this.props.focus}>
          <i className={iconClass}></i>
        </a>
      </li>
    );
  }
});

module.exports = ChildButton;
