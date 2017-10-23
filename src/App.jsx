import React, { Component } from 'react';
import WeatherList from './containers/WeatherList';
import SearchBar from './containers/SearchBar';
import './style/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}

export default App;
