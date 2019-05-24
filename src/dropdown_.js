import React from 'react';
import './style.css';


class Dropdown extends React.Component {
constructor(){
  super();

  this.state = {
    displayMenu: false,
  };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    this.handleClick = this.handleClick.bind(this);
  };

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false });
  }
  
  handleClick(event){
    console.log(event);
  }

  render() {
    return (
        <div  className="dropdown" style = {{background:"white",width:"200px"}} >
        <div className="button" onClick={this.showDropdownMenu}> Location </div>
        { this.state.displayMenu ? (
            <ul>
              <li value="mumbai" onClick={(e) => this.handleClick(e)}>Mumbai</li>
              <li value="london" onClick={(e) => this.handleClick(e)}>London</li>
              <li value="indore" onClick={(e) => this.handleClick(e)}>Indore</li>
            </ul>
          ):
          (
            null
          )
        }
        </div>
    );
  }
}

export default Dropdown;
