import { ICinemaRepository, Location, Cinema } from "../domain";

export const CinemaService = (cinemaRepository: ICinemaRepository) => {
  const getNearbyCinemas = async (location: Location): Promise<Cinema[]> => {
    return await cinemaRepository.getNearbyCinemas(location);
  };

  return { getNearbyCinemas };
};