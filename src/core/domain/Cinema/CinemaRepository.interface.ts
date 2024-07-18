import { Cinema, Location } from "./Cinema.interface";

export interface ICinemaRepository {
  getNearbyCinemas (location: Location): Promise<Cinema[]>;
}