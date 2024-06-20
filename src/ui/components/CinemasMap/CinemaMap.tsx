import React, { useEffect, useState } from "react";
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
  height: "70vh",
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

  const [userLocation, setUserLocation] = useState<Location | null>(null);
  const [selectedCinema, setSelectedCinema] = useState<Cinema | null>(null);

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

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps</div>;

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={14}
      center={userLocation ?? { lat: 0, lng: 0 }}
      options={options}
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
          />
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
            <h2>{selectedCinema.name}</h2>
            <p>{selectedCinema.vicinity}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};
