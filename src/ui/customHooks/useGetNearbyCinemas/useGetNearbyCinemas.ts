import { useState, useEffect } from "react";
import { useGetNearbyCinemasHookType } from "./useGetNearbyCinemas.interface";
import { Cinema, Location } from "../../../core/domain";

export const useGetNearbyCinemas: useGetNearbyCinemasHookType = (location: Location | null, cinemaService) => {
  const [cinemas, setCinemas] = useState<Cinema[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCinemas = async () => {
      if (location) {
        setLoading(true);
        try {
          const cinemasList = await cinemaService.getNearbyCinemas(location );
          setCinemas(cinemasList);
        } catch (error) {
          console.error("Error fetching nearby cinemas:", error);
        }
        setLoading(false);
      }
    };

    fetchCinemas();
  }, [location]);

  return { cinemas, loading };
};
