import React, { useCallback, useState } from 'react'
import debounce from 'lodash.debounce';
import { useQuery } from 'react-query';

import styles from './AddressAutocomplete.module.scss';


type GeoData = {
    address: string;
}

type UseGeodataProp = {
    query: string;
}

type SuggestionsProp = {
    suggestions: string[];
}

const useGeodata = (props: UseGeodataProp) => {
    return useQuery<GeoData[]>(
        ['geoSearch', props.query],
        async (...args) => {
            try {               
                console.log('================', args);
                return fetch('https://api.kanye.rest/').then((res) => res.json());
                
            } catch (e) {
                console.error('Error on geodata request ', e);
            }
        }
    )
};

const Suggestions = (props: SuggestionsProp) => {
    return (
      <ul className={styles.suggestions}>
        {props.suggestions.map((suggestion, index) => {
          return (
            <li className={styles.item}
              key={index}
              onClick={() => alert(`onSelect ${index}`)}
            >
              {suggestion}
            </li>
          );
        })}
      </ul>
    );
  };

export const AddressAutocomplete = () => {
    const [inputValue, setInputValue] = useState('');
    const [suggestionsActive, setSuggestionsActive] = useState(false);
    const { data } = useGeodata({ query: inputValue });

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(debounce(({ target }) => {
        setInputValue(target.value);
        setSuggestionsActive(true);
        if (target.value === "") setSuggestionsActive(false);
    }, 400), []);

    return (
        <>
            <input placeholder="Enter an address" onChange={handleInputChange} className={styles.input}/>
            {suggestionsActive && <Suggestions suggestions={[JSON.stringify(data), 'JSON.stringify(data)', 'JSON.stringify(data)']}/>}
            {/* <div>{JSON.stringify(data)}</div> */}
            {/* <p>{value}</p> */}
        </>
    );
};
