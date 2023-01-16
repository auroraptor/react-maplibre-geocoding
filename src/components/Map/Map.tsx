import React, { FC, useRef, useEffect, useState } from "react";
import maplibregl from "maplibre-gl";
import 'maplibre-gl/dist/maplibre-gl.css';
import styles from "./Map.module.scss";

const Map: FC = () => {
  const mapContainer:any = useRef(null);
  const map:any = useRef(null);
  const [lng] = useState(139.753);
  const [lat] = useState(35.6844);
  const [zoom] = useState(14);
  const [API_KEY] = useState("Nfz4p1URHGgtVgTPXgky");

  useEffect(() => {
    if (map.current) return;
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom,
    });
    // map.current.addControl(new maplibregl.NavigationControl(), 'top-right');
    new maplibregl.Marker({color: "#FF0000"})
      .setLngLat([139.7525,35.6846])
      .addTo(map.current);

  });

  return (
    <div className={styles.map_wrap}>
      <div ref={mapContainer} className={styles.map} />
    </div>
  );
};

export default Map;
