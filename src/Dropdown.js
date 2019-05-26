import React from "react";
import "./style.css";

class Dropdown extends React.Component {
  constructor() {
    super();
    this.state = {
      displayMenu: false
    };
    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  toggleDropdownMenu(event) {
    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  }
  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu)});
  }

  handleClick = event => {
    console.log(event.currentTarget.dataset.id);
    this.props.selectionDidChange(event.currentTarget.dataset.id);
  };
  render() {
    return (
      <div className="dropdown" style={{ background: "#61dafb", width: "200px", position: "left"}}>
        <div className="button" onClick={this.toggleDropdownMenu}>
          Location
        </div>
        {this.state.displayMenu ? (
          <ul>
            <li data-id="mumbai" onClick={this.handleClick}>
              Mumbai
            </li>
            <li data-id="london" onClick={this.handleClick}>
              London
            </li>
            <li data-id="indore" onClick={this.handleClick}>
              Indore
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}
export default Dropdown;
