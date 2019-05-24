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

  selectionDidChange (newValue) {
    let data=fetch("http://open.mapquestapi.com/directions/v2/alternateroutes?key=86e3wu3G1SG1k22vRkXsygIwUE8wh6zU&from=mumbai&to=Indore")
    .then(response => {response.json()})
    this.setState({
      selected: newValue,
      data: data,
    });
  }

  render () {
    return (
      <div className="App">
        <Dropdown selectionDidChange={this.selectionDidChange}/>
        <header className="App-header">
          {
            this.state.selected ? (
              <p>
                {this.state.data}
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