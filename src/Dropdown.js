import React from "react";
import "./style.css";

class Dropdown extends React.Component {
  constructor() {
    super();
    this.state = {
      displayMenu: false,
      name: "Location"
    };
    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  showDropdownMenu(event) {
    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  }
  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu)});
  }

  handleClick(event){
    //console.log("from handleclick "+event.currentTarget.dataset.id);
    this.setState({
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
