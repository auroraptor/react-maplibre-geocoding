export type GeoData = {
    properties: { formatted: string };
    geometry: { coordinates: [] };
    address: string;
  };
  
export type UseGeodataProp = {
    query: string;
  };
  
export type SuggestionsProp = {
    setSuggestionsActive: any;
    onSelect: any;
    suggestions: GeoData[];
  };
  
export type AddressAutocompleteProp = {
    onSelect: any;
  };