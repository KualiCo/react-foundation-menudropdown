var React = require('react');
var DropdownStateMixin = require('./dropdown-state-mixin');
var MenuDropdown = React.createClass({

  mixins: [
    DropdownStateMixin
  ],

  render() {
    var title = _.find(this.props.children, (child) => {
      return child.type.displayName === 'MenuDropdownTitle';
    });
    var content = _.find(this.props.children, (child) => {
      return child.type.displayName === 'MenuDropdownContent';
    });
    if (!title || !content) {
      console.warn('You must have a MenuDropdownTitle and MenuDropdownContent inside of a MenuDropdown');
      return (<div/>);
    }
    return (
      <li className="has-dropdown hover">
        <a onClick={this.onClick}>{title}</a>
        {this.state.open ? content : null}
      </li>
    );
  },

  onClick() {
    this.setDropdownState(!this.state.open);
  }

});

var MenuDropdownTitle = React.createClass({

  render() {
    return (
      <div>{this.props.children}</div>
    );
  }

});

var MenuDropdownContent = React.createClass({

  render() {
    return (
      <ul className="dropdown">
        {this.props.children}
      </ul>
    );
  }

});

module.exports = {
  MenuDropdown: MenuDropdown,
  MenuDropdownTitle: MenuDropdownTitle,
  MenuDropdownContent: MenuDropdownContent
};
