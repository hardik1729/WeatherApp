import React from "react";
import "./style.css";

class Dropdown extends React.Component {
  constructor() {
    super();
    this.state = {
      displayMenu: false
    };
    this.toggleDropdownMenu = this.toggleDropdownMenu.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  toggleDropdownMenu() {
    const displayMenu = !this.state.displayMenu;
    this.setState({ displayMenu });
  }

  handleClick = event => {
    this.props.selectionDidChange(event.currentTarget.dataset.id);
    this.setState({
      displayMenu: false,
    });
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
