import React from 'react';
import template from './template.tsx';
import {getItemsForTamas} from './getItemsForTamas';
import TAMA_LIST from './tamaList';

class TamaItemGuideApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tamas: _.sortBy(TAMA_LIST, 'displayName'),
      selectedTamas: {},
      result: [],
      showResult: false,
      disableResetBtn: true,
      disableSubmitBtn: true,
    };

    // Event handlers
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTamaSelected = this.handleTamaSelected.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleReset(event) {
    event.preventDefault();
    this.setState({
      result: [],
      selectedTamas: {},
      disableResetBtn: true,
      disableSubmitBtn: true,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      result: getItemsForTamas(this.state.tamas.filter(
          tama => this.state.selectedTamas[tama.displayName])),
    });
  }

  handleTamaSelected(event, tama) {
    event.preventDefault();
    const tamaName = tama.displayName;
    const isTamaSelected = !!!this.state.selectedTamas[tamaName];

    this.setState(prevState => {
      const newSelectedTamas = {
        ...prevState.selectedTamas,
        [tamaName]: isTamaSelected
      };
      return {
        selectedTamas: newSelectedTamas,
        disableResetBtn: !_.some(newSelectedTamas),
        disableSubmitBtn: !_.some(newSelectedTamas),
      };
    });
  }

  render() {
    return template.call(this);
  }
}

export default TamaItemGuideApp;
