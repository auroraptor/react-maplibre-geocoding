import React, { FC, useState } from "react";
import { QueryClientProvider } from 'react-query';
import { QueryClient } from 'react-query';
import { AddressAutocomplete } from "./AddressAutocomplete/AddressAutocomplete";
import Map from "./Map/Map";
import styles from "./App.module.scss";

type Coordinates = [number, number];

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

const App: FC = () => {
  const [coordinates, setCoordinates] = useState<Coordinates>([139.753, 35.6844]);

  const handleSelect = (coordinates: [number, number]) => {
    setCoordinates(coordinates);
  }
  
  return (
  <QueryClientProvider client={queryClient}>
    <div className={styles.app}>
      <AddressAutocomplete onSelect={handleSelect}/>
      <Map onSelect={coordinates}/>
    </div>
  </QueryClientProvider>
)};

export default App;
