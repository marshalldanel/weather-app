import React, { Component } from 'react';

const moment = require('moment');

class WeatherCard extends Component {
  renderIcon() {
    switch (this.props.icon) {
      case 'clear-day':
        return <img src="https://cdn4.iconfinder.com/data/icons/wthr-color/32/sunny-512.png" alt="clear day" />;
      case 'clear-night':
        return <img src="https://cdn3.iconfinder.com/data/icons/weather-16/256/Clear_Night-512.png" alt="clear night" />;
      case 'rain':
        return <img src="https://cdn3.iconfinder.com/data/icons/weather-16/256/Rainy_Day-512.png" alt="rain" />;
      case 'snow':
        return <img src="http://www.free-icons-download.net/images/heavy-snow-icon-23780.png" alt="snow" />;
      case 'sleet':
        return <img src="http://www.iconarchive.com/download/i89289/icons8/ios7/Weather-Sleet.ico" alt="sleet" />;
      case 'wind':
        return <img src="https://cdn0.iconfinder.com/data/icons/impact/100/15-512.png" alt="wind" />;
      case 'fog':
        return <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/204258-200.png" alt="fog" />;
      case 'cloudy':
        return <img src="https://cdn2.iconfinder.com/data/icons/weather-34/512/Cloud_1-512.png" alt="cloudy" />;
      case 'partly-cloudy-day':
        return <img src="http://icon-park.com/imagefiles/simple_weather_icons_partly_cloudy.png" alt="partly cloudy day" />;
      case 'partly-cloudy-night':
        return <img src="https://png.icons8.com/partly-cloudy-night/android/1600" alt="partly cloudy night" />;
      default:
        return <img src="https://cdn1.iconfinder.com/data/icons/smoothline-action/30/action_072-no_cloud-network-weather-forecast-256.png" alt="no weather" />;
    }
  }


  render() {
    return (
      <li className="weatherCard">
        <div>{moment.unix(this.props.day).format('ddd')}</div>
        {this.renderIcon()}
        <div className="temps"><strong>{Math.round(this.props.high)}&#176;</strong> | {Math.round(this.props.low)}&#176;</div>
      </li>
    );
  }
}
export default WeatherCard;
