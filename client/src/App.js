import React, { Component } from 'react';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { Card, CardText, Button } from 'reactstrap';
import ouvrebouteille from './ouvrebouteille2.svg';

import {  getLocation } from './API';

import './App.css';

const myIcon = L.icon({
  iconUrl: ouvrebouteille,
  iconSize: [30, 49]
});


class App extends Component {

  state = {
    location: {
	    lat: 50.400,
	    lng: 4.03
    },
    haveUsersLocation: false,
    zoom: 16
}
    getLoc = () => {
    getLocation()
    .then(location => {
      this.setState({
        location,
        haveUsersLocation: true,
        zoom: 16
      });
    });
    }

    componentDidMount() {
    getLocation()
    .then(location => {
      this.setState({
        location,
        haveUsersLocation: true,
        zoom: 16
      });
    });

    }



  render() {
    const position = [this.state.location.lat, this.state.location.lng];
    return (
      <div className="map">
        <Map
          className="map"
          worldCopyJump={true}
          center={position}
          zoom={this.state.zoom}>
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors and Chat location by Iconika from the Noun Project"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {
            this.state.haveUsersLocation ?
            <Marker
              position={position}
              icon={myIcon}>
            </Marker> : ''
          }
        </Map>
        <Card className="footer">
          <CardText> Made with <span role="img" aria-label="love">💚</span> by BYB team</CardText>
        </Card>
      </div>
    );
  }
}

export default App;
