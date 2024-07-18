import {
  Cinema,
  Location,
  ICinemaRepository,
} from "../../../core/domain";

export interface useGetNearbyCinemasHookType {
  (
    location: Location | null,
    cinemaService: any,
  ): {
    cinemas: Cinema[];
    loading: boolean;
  };
}
