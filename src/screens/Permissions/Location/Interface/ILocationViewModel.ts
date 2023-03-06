import { LocationObject } from "expo-location";

export interface ILocationViewModel {
  requestLocationPermissions: () => void;
  isLoading: boolean;
  location: LocationObject | null;
}
