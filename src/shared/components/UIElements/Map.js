import React, { useRef, useEffect, useState } from "react";
import "./Map.css";
import mapboxgl from "mapbox-gl/dist/mapbox-gl-csp";
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker";

mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken =
  "pk.eyJ1IjoiZGFyZWRlZnltZTMiLCJhIjoiY2tubDBpdHczMGdhZDJ4czU4ZW5xeTRmMCJ9.ubW9Oh92gaHTPx-RarqeOQ";

const Map = (props) => {
  const { center, zoom } = props;
  const mapContainer = useRef();
  const [lng, setLng] = useState(center.lng);
  const [lat, setLat] = useState(center.lat);
  const [zoomm, setZoomm] = useState(zoom);
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: center,
      zoom: zoom,
    });

    map.on("move", () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoomm(map.getZoom().toFixed(2));
    });

    return () => map.remove();
  }, [center, zoom]);
  return (
    <div>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoomm}
      </div>
      <div className={`map-container ${props.className}`} ref={mapContainer} />
    </div>
  );
};
export default Map;
