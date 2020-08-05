import React from 'react';
import './App.css';

function AppTemplate() {
  return (
    <div className="wrapper">
      <h1>Tama Item Guide</h1>

      <p>Select Tamas</p>
      <form onSubmit={this.handleSubmit}>
        <div className="tama-list-wrapper">
          {this.state.tamas.map((tama, i) =>
            <div className={"tama-select" + (this.state[tama.displayName] ? ' selected' : '')}
              key={`tama-${i}`}
              onClick={e => this.handleTamaSelected(e, tama)}>
              <div className="tama-name">{tama.displayName}</div>
              <img src={tama.imgUrl} className="tama-image" alt={tama.displayName}/>
            </div>
          )}
        </div>

        <button onClick={this.handleReset}>Reset</button>

        <input type="submit" value="Submit" />
      </form>

      <p>Result</p>
      <div>
        {this.state.result.map((item, i) =>
          <div key={i}>{item.displayName}</div>
        )}
      </div>
    </div>
  );
}

export default AppTemplate;
