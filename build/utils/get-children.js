"use strict";

var Children = require("react").Children;

var MainButton = require("../main-button");

function getChildren(children) {
  var buttons = {
    main: null,
    child: []
  };

  Children.forEach(children, function (child) {
    if (child.type === MainButton) {
      buttons.main = child;
      return;
    }
    buttons.child.push(child);
  });

  return buttons;
}

module.exports = getChildren;