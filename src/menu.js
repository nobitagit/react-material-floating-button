'use strict';

var React = require('react');
var PropTypes = require("prop-types");

var getClasses = require('./utils/get-classes');
var getChildren = require('./utils/get-children');
var childrenValidator = require('./utils/children-validator');

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(evt) {
    evt.preventDefault();

    if (this.props.method === 'hover') {
      return;
    }
    // flip the state from open to close and viceversa
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    var classes = getClasses(this.props);
    var buttons = getChildren(this.props.children);

    var onClick = null;
    if (this.props.simpleAction ) {
      typeof this.props.onMainButtonClick === 'function' ? this.props.onMainButtonClick() : ''
    }
    else {
      this.props.onMainButtonClick ? this.props.onMainButtonClick() : '';
      this.toggleMenu(); // CHANGED
    }

    var main = buttons.main && React.cloneElement(buttons.main, {
      // onClick: this.toggleMenu
      onClick: onClick,
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
}

Menu.propTypes = {
  effect: PropTypes.oneOf(['zoomin', 'slidein', 'slidein-spring', 'fountain']).isRequired,
  position: PropTypes.oneOf(['tl', 'tr', 'bl', 'br']).isRequired,
  children: childrenValidator,
  onMainButtonClick: PropTypes.func
};

module.exports = Menu;
