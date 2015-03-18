'use strict';

var React = require('react');

var getClasses = require('./utils/get-classes');
var getChildren = require('./utils/get-children');
var childrenValidator = require('./utils/children-validator');

var Menu = React.createClass({

  propTypes: {
    effect: React.PropTypes.oneOf(['zoomin', 'slidein', 'fountain']).isRequired,
    position: React.PropTypes.oneOf(['tl', 'tr', 'bl', 'br']).isRequired,
    children: childrenValidator
  },

  getInitialState: function() {
    return {
      isOpen: false
    };
  },

  toggleMenu: function() {
    if(this.props.method === 'hover'){
      return;
    }
    // flip the state from open to close and viceversa
    this.setState({
      isOpen: !this.state.isOpen
    });
  },

  render: function() {
    var classes = getClasses(this.props);
    var buttons = getChildren(this.props.children);

    var main = buttons.main && React.cloneElement(buttons.main, {
      onToggleMenu: this.toggleMenu
    });

    return (
      <ul className={classes}
          data-mfb-toggle={this.props.method}
          data-mfb-state={this.state.isOpen ? 'open' : 'closed'}>
        <li className="mfb-component__wrap">
          {main}
          <ul className="mfb-component__list">
            {buttons.child}
          </ul>
        </li>
      </ul>
    );
  }
});

module.exports = Menu;
