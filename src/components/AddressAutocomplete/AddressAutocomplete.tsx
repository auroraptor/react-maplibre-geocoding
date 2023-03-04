import React, { useCallback, useState } from "react";
import debounce from "lodash.debounce";
import { useQuery } from "react-query";
import { GeoData, UseGeodataProp, AddressAutocompleteProp } from "../../types";
import { Suggestions } from "../Suggestions/Suggestions";

import styles from "./AddressAutocomplete.module.scss";

export const useGeodata = (props: UseGeodataProp) => {
  const API_KEY: string = "83a20212025a4afdbc9176d77d1cc513";

  return useQuery<GeoData[]>(["geoSearch", props.query], async (...args) => {
    try {
      return fetch(
        `https://api.geoapify.com/v1/geocode/search?text=${props.query}&apiKey=${API_KEY}`
      )
        .then((res) => res.json())
        .then((res) => res.features);
    } catch (e) {
      console.error("Error on geodata request ", e);
    }
  });
};

export const sum = (a: number, b: number) => a + b;

export const AddressAutocomplete = (props: AddressAutocompleteProp) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestionsActive, setSuggestionsActive] = useState(false);
  const { data } = useGeodata({ query: inputValue });
  const inputRef = React.useRef<HTMLInputElement>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> =
    useCallback(
      debounce(({ target }) => {
        setInputValue(target.value);
        setSuggestionsActive(true);
        if (target.value === "") setSuggestionsActive(false);
      }, 400),
      []
    );

    const resetInputField = () => {
        if(inputRef && inputRef.current) {
          inputRef.current.value = "";
          setSuggestionsActive(false);
        }
    };

  return (
    <>
      <input
        placeholder="Enter an address"
        onChange={handleInputChange}
        className={styles.input}
        onFocus={() => setSuggestionsActive(true)}
        ref={inputRef}
      />
      <button className={styles.close} onClick={resetInputField}/>
      {suggestionsActive && (
        <Suggestions
          suggestions={data || []}
          onSelect={props.onSelect}
          setSuggestionsActive={setSuggestionsActive}
        />
      )}
    </>
  );
};
