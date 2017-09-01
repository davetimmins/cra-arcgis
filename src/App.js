import React, { Component } from 'react';
import MapView from 'esri/views/MapView';
import WebMap from 'esri/WebMap';

import logo from './logo.svg';
import './App.css';

const createMap = (domNode) => {
  new MapView({
    container: domNode,
    map: new WebMap({
      portalItem: { // autocasts as new PortalItem()
        id: "f2e9b762544945f390ca4ac3671cfa72"
      }
    })
  });
}

class App extends Component {

  componentDidMount() {
    createMap(this.mapContainer);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div style={{width: '100%', height: '400px'}} ref={node => this.mapContainer = node}>
        </div>
      </div>
    );
  }
}

export default App;
