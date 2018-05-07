import React from 'react';
import WeatherWidget from '../components/WeatherWidget';
import './LandingPage.css';
export default function LandingPage(props) {
  return (
    <div className="container">
      <h1> Schedio</h1>
      <div className="info-progression">
        <div className="f-pg">
          <i className="fa fa-book fa-5x"></i>
          <p>Plan</p>
        </div>
   
        <div className="f-pg">
          <i className="fa fa-paper-plane fa-5x">
          </i>
          <p>Schedule</p>
        </div>

        <div className="f-pg">
          <i className="fa fa-calendar fa-5x">
          </i>
          <p>Commit</p>
        </div>
      </div>
      <WeatherWidget event= {{'location': {lat: '52.5200', long: '13.4050'}, starttime: Date.now()}}/>
    </div>
  );
}
