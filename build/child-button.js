"use strict";

var React = require("react");
var classnames = require("classnames");

var ChildButton = React.createClass({
  displayName: "ChildButton",

  render: function render() {
    var iconClass = "mfb-component__child-icon " + this.props.icon,
        className = classnames("mfb-component__button--child", this.props.className);
    return React.createElement(
      "li",
      null,
      React.createElement(
        "a",
        { href: this.props.href,
          "data-mfb-label": this.props.label,
          onClick: this.props.onClick,
          className: className },
        this.props.children || React.createElement("i", { className: iconClass })
      )
    );
  }
});

module.exports = ChildButton;