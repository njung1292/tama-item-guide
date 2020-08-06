import React from 'react';
import template from './template.tsx';
import {getItemsForTamas} from './getItemsForTamas';
import {default as TAMA_LIST} from './tamaList.json';
import {default as ITEM_LIST} from './itemList.json';
import _ from 'lodash';

const DEFAULT_LOCATIONS = [
  "Food Town",
  "Gym",
  "Salon",
  "Starry Lab",
  "Tama Depa",
  "Tama Farm",
  "Tama Hotel",
  "Toy Park"
];

const sortedTamas = _.sortBy(TAMA_LIST, 'displayName');

class TamaItemGuideApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemMap: _.keyBy(ITEM_LIST, 'displayName'),
      displayedTamas: sortedTamas,
      filterLocations: ["Fairy Land", "Magic Land", "Easter Land", "Flower Garden"],
      selectedTamas: {},
      selectedLocationFilter: null,
      result: [],
      disableResetBtn: true,
      disableSubmitBtn: true,
    };

    // Event handlers
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFilterClicked = this.handleFilterClicked.bind(this);
    this.handleTamaSelected = this.handleTamaSelected.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleReset(event) {
    event.preventDefault();
    this.setState({
      result: [],
      displayedTamas: sortedTamas,
      selectedTamas: {},
      filterLocations: ["Fairy Land", "Magic Land", "Easter Land", "Flower Garden"],
      selectedLocationFilter: null,
      disableResetBtn: true,
      disableSubmitBtn: true,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      result: getItemsForTamas(this.state.displayedTamas.filter(
          tama => this.state.selectedTamas[tama.displayName]), DEFAULT_LOCATIONS.concat(this.state.filterLocations)),
    });
  }

  handleFilterClicked(event, filterName) {
    event.preventDefault();

    const isFilterActivated = this.state.selectedLocationFilter !== filterName;
    let newDisplayedTamas = sortedTamas;
    let filterLocations = ["Fairy Land", "Magic Land", "Easter Land", "Flower Garden"];

    if (isFilterActivated) {
      switch (filterName) {
        case "FAIRY":
          filterLocations = ["Fairy Land"];
          break;
        case "MAGIC":
          filterLocations = ["Magic Land"];
          break;
        case "PASTEL":
          filterLocations = ["Easter Land", "Flower Garden"];
          break;
        default:
          break;
      }

      newDisplayedTamas = sortedTamas.filter(
        tama => _.includes(DEFAULT_LOCATIONS.concat(filterLocations), tama.location));
    }

    this.setState(prevState => {
      return {
        filterLocations: filterLocations,
        displayedTamas: newDisplayedTamas,
        selectedLocationFilter: isFilterActivated ? filterName : null,
        disableResetBtn: !isFilterActivated && !_.some(prevState.selectedTamas),
      };
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
        disableResetBtn: !_.some(newSelectedTamas) && prevState.selectedLocationFilter != null,
        disableSubmitBtn: !_.some(newSelectedTamas),
      };
    });
  }

  render() {
    return template.call(this);
  }
}

export default TamaItemGuideApp;
