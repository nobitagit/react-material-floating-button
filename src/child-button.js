'use strict';

var React = require('react');
var classnames = require('classnames');

class ChildButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    if (this.props.disabled === true) {
      return;
    }

    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  render() {
    var iconClass = classnames('mfb-component__child-icon', this.props.icon);
    var className = classnames('mfb-component__button--child',
                               this.props.className,
                               {"mfb-component__button--disabled": this.props.disabled});
    return (
      <li>
        <a href={this.props.href}
           data-mfb-label={this.props.label}
           onClick={this.handleOnClick}
           className={className}>
          <i className={iconClass}></i>
        </a>
      </li>
    );
  }
}

module.exports = ChildButton;
