/** @jsx React.DOM */
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['react'], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require('react'));
    } else {
        // Browser globals (root is window)
        root.MfbMenu = factory(root.React);
    }
}(this, function (React) {

    var MfbMenu = React.createClass({

      getInitialState: function() {
        return { isOpen: false };
      },

      toggleMenu: function() {
        if(this.props.method === 'hover'){ return; }
        // flip the state from open to close and viceversa
        this.setState({
          isOpen: !this.state.isOpen
        });
      },

      render: function() {
        var effect = ' mfb-' + this.props.effect,
            pos = ' mfb-component--' + this.props.position,
            baseClass = pos + effect;

        var buttons = this.props.buttons.map(function( button, i ){
          return(
            <ChildButton href={button.href}
                         label={button.label}
                         icon={button.icon}
                         key={i}
                         onClick={button.onClick.bind(this, button, i)}/>
          );
        }, this);
        return (
          <ul className={baseClass}
              data-mfb-toggle={this.props.method}
              data-mfb-state={this.state.isOpen ? 'open' : 'closed'}>
            <li className="mfb-component__wrap">
              <MainButton onToggleMenu={this.toggleMenu}
                          configs={this.props.mainButton}/>
              <ul className="mfb-component__list">
                {buttons}
              </ul>
            </li>
          </ul>
        );
      }
    });

    var MainButton = React.createClass({
      handleClick: function() {
        this.props.onToggleMenu();
      },
      render: function(){
        var iconResting = "mfb-component__main-icon--resting " + this.props.configs.iconResting,
            iconActive = "mfb-component__main-icon--active " + this.props.configs.iconActive;
        if(this.props.configs.label){
          return(
            <a href={this.props.href} className="mfb-component__button--main" onClick={this.handleClick} data-mfb-label={this.props.configs.label}>
              <i className={iconResting}></i>
              <i className={iconActive}></i>
            </a>
          );
        } else {
          return(
            <a href="#" className="mfb-component__button--main" onClick={this.handleClick}>
              <i className={iconResting}></i>
              <i className={iconActive}></i>
            </a>
          );
        }
      }
    });

    var ChildButton = React.createClass({
      render: function(){
        var iconClass = 'mfb-component__child-icon ' + this.props.icon;
        return(
          <li>
            <a href={this.props.href}
               data-mfb-label={this.props.label}
               onClick={this.props.onClick.bind(this)}
               className="mfb-component__button--child">
              <i className={iconClass}></i>
            </a>
          </li>
        );
      }
    });

  return MfbMenu;
}));
