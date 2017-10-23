import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import WeatherCard from '../components/WeatherCard';

class WeatherList extends Component {
  isWeather() {
    const weather = this.props.weather[0];
    if (!weather) {
      return (
        <div>Loading</div>
      );
    }

    const weatherNodes = weather.daily.data.map((node) => {
      return (
        <WeatherCard
          key={uuid.v4()}
          high={node.temperatureHigh}
          low={node.temperatureLow}
          icon={node.icon}
          day={node.time}
        />
      );
    });
    console.log('this.props', this.props); // All cities searched

    return (
      <div>
        <h3 className="summary">{this.props.weather[0].daily.summary}</h3>
        <ul className="weatherList">
          { weatherNodes }
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div>
        { this.isWeather() }
      </div>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
