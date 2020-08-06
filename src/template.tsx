import * as React from 'react';
import './styles.css';

export default function template() {
  return (
    <div className="wrapper">
      <h1>Tama Item Guide</h1>

      <div>Result:
        {this.state.result.map((item, i) =>
          <span key={i}>{` ${item.displayName}`}{i === this.state.result.length - 1 ? '' : ','}</span>
        )}
      </div>

      <p>Select Tamas</p>
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
      <div className="tama-list-wrapper">
        {this.state.tamas.map((tama, i) =>
          <div className={`tama-select${(this.state.selectedTamas[tama.displayName] ? ' selected' : '')}`}
            key={`tama-${i}`}
            onClick={e => this.handleTamaSelected(e, tama)}>
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
        )}
      </div>
    </div>
  );
}
