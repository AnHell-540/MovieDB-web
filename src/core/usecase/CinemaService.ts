import { Cinema, Location } from "../domain/Cinema.interface";
import { CinemaRepository } from "../infrastructure/CinemaRepository";

export const CinemaService = {
  getNearbyCinemas: async (location: Location): Promise<Cinema[]> => {
    return await CinemaRepository.getNearbyCinemas(location);
  },
};
