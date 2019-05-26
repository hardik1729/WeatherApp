import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dropdown from './Dropdown'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: props.selected,
      data: [],
    }

    this.selectionDidChange = this.selectionDidChange.bind(this);
  }

  async selectionDidChange (newValue) {
    const unparsedData = await fetch("http://open.mapquestapi.com/directions/v2/alternateroutes?key=86e3wu3G1SG1k22vRkXsygIwUE8wh6zU&from=mumbai&to=indore")
    const data = unparsedData.json();

    this.setState({
        selected: newValue,
        data,
    });

    console.log("DATA SET TO: ", this.state.data);
  }

  render () {
    return (
      <div className="App">
        <Dropdown selectionDidChange={this.selectionDidChange}/>
        <header className="App-header">
          {
            this.state.selected ? (
              <p>
                Data goes here
              </p>  
            ) :
            (
              <div>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Weather Details to be displayed here
                </p>
              </div> 
            )
          }
        </header>
      </div>
    );
  }
}

export default App;
