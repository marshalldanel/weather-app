import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { fetchWeather } from '../actions/index.js';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({ term: e.target.value });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    geocodeByAddress(this.state.term)
      .then(results => getLatLng(results[0]))
      .then(({ lat, lng }) => this.props.fetchWeather({ lat, lng }))
      .then(setTimeout(() => { this.setState({ term: '' }); }, 1000))
      .catch(error => console.error('Error', error));
  }

  render() {
    const inputProps = {
      className: 'form-control searchBox',
      placeholder: 'Search places...',
      value: this.state.term,
      onChange: term => this.setState({ term }),
    };

    const extraStyles = {
      root: {
        width: '100%',
      },
      input: {
        width: '100%',
        fontSize: '1em',
      },
      autocompleteContainer: {
        width: '105%',
      },
    };

    return (
      <div className="search">
        <form onSubmit={this.handleFormSubmit}>
          <PlacesAutocomplete
            inputProps={inputProps}
            highlightFirstSuggestion
            googleLogo={false}
            styles={extraStyles}
          />
          <button type="submit" className="button">Submit</button>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
