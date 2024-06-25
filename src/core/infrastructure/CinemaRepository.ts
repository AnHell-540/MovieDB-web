import { Cinema, Location } from "../domain/Cinema.interface";

export const CinemaRepository = {
  getNearbyCinemas: async (location: Location): Promise<Cinema[]> => {
    return new Promise((resolve, reject) => {
      if (!window.google || !window.google.maps) {
        reject("Google Maps JavaScript API not loaded");
        return;
      }

      const service = new window.google.maps.places.PlacesService(
        document.createElement("div")
      );
      const request = {
        location: new google.maps.LatLng(location.lat, location.lng),
        radius: 30000,
        type: "movie_theater",
      }; 

      service.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && results) {
          const cinemas = results
            .map((place) => {
              if (place.geometry && place.geometry.location) {
                return {
                  place_id: place.place_id ?? "",
                  name: place.name ?? "",
                  vicinity: place.vicinity ?? "",
                  geometry: {
                    location: {
                      lat: place.geometry.location.lat(),
                      lng: place.geometry.location.lng(),
                    },
                  },
                photos: [
                  {
                    html_attributions: place.photos?.[0].html_attributions
                  }
                ]
                };
              } else {
                return null;
              }
            })
            .filter((cinema) => cinema !== null) as Cinema[];
          resolve(cinemas);
        } else {
          reject(status);
        }
      });
    });
  },
};
