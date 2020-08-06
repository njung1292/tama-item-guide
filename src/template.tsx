import * as React from 'react';
import './styles.css';

export default function template() {
  return (
    <div className="wrapper">
      <h1>Tamagotchi On Item Guide</h1>
      <h2>This tool will find a short list of favorite items to satisfy the selected Tamagotchi residents</h2>

      <div className="sticky-footer">
        <div className="results-container">Result:
          {this.state.result.map((item, i) =>
            <span className="result-item" key={i}>{item.displayName}</span>
          )}
        </div>
        <button onClick={this.handleReset}
          disabled={this.state.disableResetBtn}
          className="reset-btn">
          Reset
        </button>
        <button onClick={this.handleSubmit}
          disabled={this.state.disableSubmitBtn}
          className="submit-btn">
          Submit
        </button>
      </div>
      <div className="tama-filter-list-wrapper">
        Filters:
        <div className={`tama-filter tama-filter--fairy${this.state.selectedLocationFilter === "FAIRY" ? ' selected' : ''}`}
          onClick={e => this.handleFilterClicked(e, "FAIRY")}>
            Fairy
        </div>

        <div className={`tama-filter tama-filter--magic${this.state.selectedLocationFilter === "MAGIC" ? ' selected' : ''}`}
          onClick={e => this.handleFilterClicked(e, "MAGIC")}>
            Magic
        </div>

        <div className={`tama-filter tama-filter--pastel${this.state.selectedLocationFilter === "PASTEL" ? ' selected' : ''}`}
          onClick={e => this.handleFilterClicked(e, "PASTEL")}>
            Pastel
        </div>
      </div>
      <div className="tama-list-wrapper">
        {this.state.displayedTamas.map((tama, i) =>
          <div className={`tama-select${(this.state.selectedTamas[tama.displayName] ? ' selected' : '')}`}
            key={`tama-${i}`}
            onClick={e => this.handleTamaSelected(e, tama)}>
            <div className="tama-select-front">
              <div className="tama-image-container">
                <img src={tama.imgUrl} className="tama-image" alt={tama.displayName}/>
              </div>
              <div className="tama-select-text-contents">
                <div className="tama-name">{tama.displayName}</div>
              </div>
              <div className="tama-select-tags">
                <span className={`tama-select-tag tama-select-tag--${tama.gender}`}>{tama.gender}</span>
                <span className="tama-select-tag tama-select-tag--location">{tama.location}</span>
              </div>
            </div>
            <div className="tama-select-back">
              <div className="tama-select-text-contents">
                <div className="tama-name">{tama.displayName}</div>
              </div>
              <div className="tama-select-favorite-items">
                <ul>
                {tama.favoriteItems.map((item, i) =>
                  <li key={`item-${tama.displayName}-${i}`}>{item}</li>
                )}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
