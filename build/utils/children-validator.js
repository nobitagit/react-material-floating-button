"use strict";

var Children = require("react").Children;

var MainButton = require("../main-button");
var ChildButton = require("../child-button");

function childrenValidator(props, propName, componentName) {
  var children = props[propName];
  var mainButtonCount = 0;
  var childButtonCount = 0;
  var otherCount = 0;
  var msg;
  Children.forEach(children, function (child) {
    if (child.type === MainButton) {
      return mainButtonCount++;
    }
    if (child.type === ChildButton) {
      return childButtonCount++;
    }
    otherCount++;
  });
  if (mainButtonCount === 0) {
    msg = "Prop `children` must contain a MainButton component in `" + componentName + "`.";
    return new Error(msg);
  }
  if (mainButtonCount > 1) {
    msg = "Prop `children` must contain only 1 MainButton component in `" + componentName + "`, but " + mainButtonCount + " exist.";
    return new Error(msg);
  }
  if (otherCount) {
    msg = "Prop `children` contains elements other than MainButton and ChildButton " + "components in `" + componentName + "`.";
    return new Error(msg);
  }
}

module.exports = childrenValidator;