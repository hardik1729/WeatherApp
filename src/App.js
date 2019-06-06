import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dropdown from './Dropdown'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: props.selected,
      data: {},
    }
    this.selectionDidChange = this.selectionDidChange.bind(this);
  }

  async selectionDidChange (newValue) {
    const response = await fetch("http://open.mapquestapi.com/directions/v2/alternateroutes?key=86e3wu3G1SG1k22vRkXsygIwUE8wh6zU&from=london&to="+newValue);
    const data = await response.json();
    this.setState({
      selected: newValue,
      data: data
    });
  }

  render () {
    // console.log(this.state.selected);
    // console.log(this.state.data);
    return (
      <div className="App">
        <Dropdown selectionDidChange={this.selectionDidChange}/>
        <header className="App-header">
          {
            this.state.selected ? (
              <div>
                <p>
                  {this.state.selected}
                </p>
                <p>
                  {this.state.data.route.distance} miles
                </p>
              </div> 
            ) :
            (
              <div>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Distance details to be displayed here
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
