import React from "react";
import "./style.css";

class Dropdown extends React.Component {
  constructor() {
    super();
    this.state = {
      displayMenu: false,
      name: "Location"
    };
    this.toggleDropdownMenu = this.showDropdownMenu.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  toggleDropdownMenu(event) {
    const displayMenu = !this.state.displayMenu;
    this.setState({ 
      displayMenu: displayMenu
    });
  }

  handleClick(event){
    //console.log("from handleclick "+event.currentTarget.dataset.id);
    this.setState({
      displayMenu:false,
      name: event.currentTarget.dataset.id
    });
    this.props.selectionDidChange(event.currentTarget.dataset.id);
  };
  render() {
    return (
      <div className="dropdown" style={{ background: "#61dafb", width: "200px", position: "left"}}>
        <div className="button" onClick={this.showDropdownMenu}>
          {this.state.name}
        </div>
        {this.state.displayMenu ? (
          <ul>
            <li data-id="Liverpool" onClick={this.handleClick}>
              Liverpool
            </li>
            <li data-id="Bristol" onClick={this.handleClick}>
              Bristol
            </li>
            <li data-id="Manchester" onClick={this.handleClick}>
              Manchester
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}
export default Dropdown;
