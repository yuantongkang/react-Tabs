import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabs, { Tab } from './Tabs'

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Tabs className="">
          <Tab name="1" >
            <div>内容一</div>
          </Tab>
          <Tab name="2">
            <div>内容二</div>
          </Tab>
          <Tab name="3">
            <div>
              内容三
          </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default App;
