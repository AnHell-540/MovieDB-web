import { Cinema, Location } from "../../../core/domain";

export interface useGetNearbyCinemasHookType {
  (location: Location | null, cinemaService: any): {
    cinemas: Cinema[];
    loading: boolean;
  };
}
