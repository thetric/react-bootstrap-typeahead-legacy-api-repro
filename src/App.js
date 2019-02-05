import React, { Component } from "react";
import {Typeahead} from 'react-bootstrap-typeahead'; 

const options = [
  { name: 'Alabama', population: 4780127, capital: 'Montgomery', region: 'South' },
  { name: 'Alaska', population: 710249, capital: 'Juneau', region: 'West' },
  { name: 'Arizona', population: 6392307, capital: 'Phoenix', region: 'West' }
];

class App extends Component {
  render() {
    return (
      <Typeahead
        labelKey="name"
        multiple={false}
        options={options}
        placeholder="Choose a state..."
      />
    );
  }
}

export default App;
