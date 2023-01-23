import React, { useRef, useEffect, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import styles from "./Map.module.scss";

type MapProp = {
  onSelect: [number, number];
};

const Map = (props: MapProp) => {
  const mapContainer: any = useRef(null);
  const map: any = useRef(null);
  const [zoom] = useState(14);
  const [API_KEY] = useState("Nfz4p1URHGgtVgTPXgky");

  useEffect(() => {
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
      center: props.onSelect,
      zoom: zoom,
    });

    new maplibregl.Marker({ color: "#FF0000" })
      .setLngLat(props.onSelect)
      .addTo(map.current);
  }, [props.onSelect]);

  return (
    <div className={styles.map_wrap}>
      <div ref={mapContainer} className={styles.map} />
    </div>
  );
};

export default Map;
