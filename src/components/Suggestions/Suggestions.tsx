import React from "react";
import { SuggestionsProp } from "../../types";

import styles from "./Suggestions.module.scss";

export const Suggestions = (props: SuggestionsProp) => {
  return (
    <ul className={styles.suggestions}>
      {props.suggestions.map((suggestion, index) => {
        return (
          <li
            className={styles.item}
            key={index}
            onClick={() => {
              props.onSelect(suggestion.geometry.coordinates);
              props.setSuggestionsActive(false);
            }}
          >
            {suggestion.properties.formatted}
          </li>
        );
      })}
    </ul>
  );
};
