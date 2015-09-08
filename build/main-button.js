"use strict";

var React = require("react");
var classnames = require("classnames");

var MainButton = React.createClass({
  displayName: "MainButton",

  getDefaultProps: function getDefaultProps() {
    return {
      href: "#",
      onClick: function onClick() {},
      iconResting: "",
      iconActive: "",
      label: null
    };
  },
  render: function render() {
    var iconResting = classnames("mfb-component__main-icon--resting", this.props.iconResting),
        iconActive = classnames("mfb-component__main-icon--active", this.props.iconActive),
        mainClass = classnames("mfb-component__button--main", this.props.className),
        children = this.props.children || [React.createElement("i", { className: iconResting }), React.createElement("i", { className: iconActive })];

    if (this.props.label) {
      return React.createElement(
        "a",
        { href: this.props.href, className: mainClass, onClick: this.props.onClick, "data-mfb-label": this.props.label },
        children
      );
    } else {
      return React.createElement(
        "a",
        { href: this.props.href, className: mainClass, onClick: this.props.onClick },
        children
      );
    }
  }
});

module.exports = MainButton;