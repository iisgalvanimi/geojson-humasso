import { Component, OnInit } from '@angular/core';
import {GEOJSON, GeoFeatureCollection } from './models/geojson.model';
import { Marker } from './models/marker.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-maps';
  zoom: number = 8;
  geoJsonObject : GeoFeatureCollection;
  fillColor: string = "#FF0000";
  markers: Marker[];

  lng: number = 9.02657833507687;
  lat: number = 45.512051524024308;

  constructor()
  {
    this.geoJsonObject = GEOJSON;
    console.log(this.geoJsonObject.features);
  }

  styleFunc = (feature) =>{
    console.log(feature.i.id)
    let newColor = "#FF0000"; //RED
    if(feature.i.id == 0) newColor = "#00FF00"; //GREEN
    else newColor = "#0000FF"; //BLUE
    return ({
      clickable: false,
      fillColor: newColor,
      strokeWeight: 1
    });
  }

}
