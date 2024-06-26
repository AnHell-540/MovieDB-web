import { useState, useEffect } from "react";
import { CinemaService } from "../../core/usecase";
import { Cinema, Location } from "../../core/domain";

export const useGetNearbyCinemas = (location: Location | null) => {
  const [cinemas, setCinemas] = useState<Cinema[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCinemas = async () => {
      if (location) {
        setLoading(true);
        try {
          const cinemasList = await CinemaService.getNearbyCinemas(location);
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
