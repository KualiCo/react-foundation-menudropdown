#Foundation Menu Dropdown Component for React

###Usage

```javascript
var React = require('react');
var component = require('react-foundation-menudropdown');
var MenuDropdown = component.MenuDropdown;
var MenuDropdownTitle = component.MenuDropdownTitle;
var MenuDropdownContent = component.MenuDropdownContent;

var MyComponent = React.createClass({

  render: function() {
    return (
      <nav className="top-bar">
        <section className="top-bar-section">
          <ul className="right">
            <li><a href="#">A link</a></li>
            <MenuDropdown>
              <MenuDropdownTitle>Welcome User</MenuDropdownTitle>
              <MenuDropdownContent>
                <li><a href="/">Main</a></li>
                <li><a href="/logout">Logout</a></li>
              </MenuDropdownContent>
            </MenuDropdown>
          </ul>
        </section>
      </nav>
    );
  }

});

module.exports = MyComponent;
```
