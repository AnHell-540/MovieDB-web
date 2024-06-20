
export interface Location {
  lat: number;
  lng: number;
}

export interface Cinema {
  place_id: string;
  name: string;
  vicinity: string;
  geometry: {
    location: Location;
  };

}
