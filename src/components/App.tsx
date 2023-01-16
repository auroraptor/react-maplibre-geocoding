import React, { FC } from "react";
import { QueryClientProvider } from 'react-query';
import { QueryClient } from 'react-query';
import { AddressAutocomplete } from "./AddressAutocomplete/AddressAutocomplete";
import Map from "./Map/Map";
import styles from "./App.module.scss";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

const App: FC = () => (
  <QueryClientProvider client={queryClient}>
    <div className={styles.app}>
      <AddressAutocomplete />
      <Map />
    </div>
  </QueryClientProvider>
);

export default App;
