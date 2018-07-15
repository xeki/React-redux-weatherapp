import React, { Component } from 'react';
import SearchBar from '../containers/search-bar';
import DisplayWeather from '../containers/city-list';

export default class App extends Component {
  render() {
    return (
      <div><SearchBar />
		<DisplayWeather />
	 </div>
    );
  }
}
