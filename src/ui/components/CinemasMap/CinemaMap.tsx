import { useEffect, useState } from "react";
import {
  useLoadScript,
  GoogleMap,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useGetNearbyCinemas } from "../../customHooks/useGetNearbyCinemas";
import { Location, Cinema } from "../../../core/domain/Cinema.interface";

const libraries: "places"[] = ["places"];
const mapContainerStyle = {
  width: "100%",
  height: "60vh",
};
const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

export const CinemaMap = () => {

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_GOOGLE!,
    libraries,
  });

  const emptyLocation: Location = {
    lat:0,
    lng:0
  }
  const [userLocation, setUserLocation] = useState<Location>( emptyLocation );
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      () => null
    );
  }, []);

  const { cinemas, loading } = useGetNearbyCinemas(userLocation);
  const [selectedCinema, setSelectedCinema] = useState<Cinema | null>(null);

  // useEffect(() => {
  //   if (cinemas.length > 0) {
  //     setSelectedCinema(cinemas[0]);
  //   }
  // }, [cinemas]);

  const getHrefFromCinemaPhotosAtt = (att: string) => {
    const parts = att.split('"');
    const href = parts[1];
    return href;
  };

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps</div>;

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={13}
      center={userLocation ?? { lat: 0, lng: 0 }}
      options={{
        ...options,
        mapId: process.env.REACT_APP_MAP_ID_STYLE,
      }}
    >
      {loading ? (
        <div>Loading cinemas...</div>
      ) : (
        cinemas.map((cinema) => (
          <Marker
            key={cinema.place_id}
            position={{
              lat: cinema.geometry.location.lat,
              lng: cinema.geometry.location.lng,
            }}
            onClick={() => setSelectedCinema(cinema)}
          ></Marker>
        ))
      )}

      {selectedCinema && (
        <InfoWindow
          position={{
            lat: selectedCinema.geometry.location.lat,
            lng: selectedCinema.geometry.location.lng,
          }}
          onCloseClick={() => setSelectedCinema(null)}
        >
          <div>
            <h2 style={{ color: "#777777" }}>{selectedCinema.name}</h2>
            {selectedCinema.photos && selectedCinema.photos.length > 0 && (
              <div>
                {selectedCinema.photos.map((photo, index) => (
                  <div key={index}>
                    {photo.html_attributions && (
                      <h4>
                        <a
                          href={getHrefFromCinemaPhotosAtt(
                            photo.html_attributions[0]
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Página del sitio
                        </a>
                      </h4>
                    )}
                  </div>
                ))}
              </div>
            )}
            <p>{selectedCinema.vicinity}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};
