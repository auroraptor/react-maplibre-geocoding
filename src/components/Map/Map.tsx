import React, { FC, useRef, useEffect, useState } from "react";
import maplibregl from "maplibre-gl";
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
  });

  return (
    <div className={styles.map_wrap}>
      <div ref={mapContainer} className={styles.map} />
    </div>
  );
};

export default Map;
