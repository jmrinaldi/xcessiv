import React, { Component } from 'react';
import './App.css';
import MainDataExtraction from './DatasetExtraction/MainDataExtraction';
import TestDataExtraction from './DatasetExtraction/TestDataExtraction';
import MetaFeatureExtraction from './DatasetExtraction/MetaFeatureExtraction';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Xcessiv</h2>
        </div>
        <MainDataExtraction path='test'/>
        <TestDataExtraction path='test'/>
        <MetaFeatureExtraction path='test'/>
      </div>
    )
  }
}

export default App;
