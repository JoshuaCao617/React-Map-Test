import React, { useState } from "react";
import ReactMapGL, {Marker} from "react-map-gl";
import * as parkData from "./data/Skateboard_Parks.geojson"

export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: "100vw",
    height: "100vh",
    zoom: 10
  });

  return (
    <div>
      <ReactMapGL 
      {...viewport} 
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/joshuasevenc/cl1p5fxce000c15li37ddk55u"
      onViewportChange={viewport => {
        setViewport(viewport)
      }}
      >
        maker here
      </ReactMapGL>
    </div>
  );
}