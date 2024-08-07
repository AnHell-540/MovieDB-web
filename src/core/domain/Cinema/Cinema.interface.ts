export interface Cinema {
  place_id: string;
  name: string;
  vicinity: string;
  geometry: {
    location: Location;
  };
  photos?: Photo[];
}

export interface Location {
  lat: number;
  lng: number;
}

interface Photo {
  html_attributions: string[];
}

export interface Request {
  location: google.maps.LatLng;
  radius: number;
  type: string;
}
