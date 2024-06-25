
export interface Location {
  lat: number;
  lng: number;
}

export interface Photo {
  html_attributions: string[];
}

export interface Cinema {
  place_id: string;
  name: string;
  vicinity: string;
  geometry: {
    location: Location;
  };
  photos?: Photo[]
}
