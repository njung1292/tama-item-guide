import React from 'react';
import AppTemplate from './AppTemplate';
import {getItemsForTamas} from './getItemsForTamas';
import TAMA_LIST from './tamaList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tamas: TAMA_LIST,
      result: []
    };

    // Event handlers
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTamaSelected = this.handleTamaSelected.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleReset(event) {
    event.preventDefault();
    const stateObject = {};
    this.state.tamas.forEach(tama => stateObject[tama.displayName] = false);
    stateObject.result = [];
    stateObject.tamas = this.state.tamas;
    this.setState(stateObject);
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      result: getItemsForTamas(this.state.tamas.filter(tama => this.state[tama.displayName]))
    });
  }

  handleTamaSelected(event, tama) {
    event.preventDefault();
    const tamaName = tama.displayName;
    const currentState = !!this.state[tamaName];
    const newState = !currentState;
    this.setState({
      [tamaName]: newState
    });
  }

  render() {
    return AppTemplate.call(this);
  }
}

export default App;
