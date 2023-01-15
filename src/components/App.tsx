import React, { FC } from "react";
import AddressAutocomplete from "./AddressAutocomplete/AddressAutocomplete";
import Map from "./Map/Map";
import styles from "./App.module.scss";

const App: FC = () => (
  <div className={styles.app}>
    <AddressAutocomplete></AddressAutocomplete>
    <Map></Map>
  </div>
);

export default App;
