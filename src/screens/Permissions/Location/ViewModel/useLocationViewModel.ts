import { useNavigation } from "@react-navigation/native";
import {
  getCurrentPositionAsync,
  LocationObject,
  requestForegroundPermissionsAsync,
} from "expo-location";
import { useState } from "react";
import { useSession } from "../../../../context/Session";
import LocalStorage from "../../../../persistence/LocalStorage";
import { ILocationViewModel } from "../Interface/ILocationViewModel";

const useLocationViewModel = () => {
  const navigation = useNavigation();
  const { setSession } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState<LocationObject | null>(null);

  async function requestLocationPermissions() {
    setIsLoading(true);
    const { granted } = await requestForegroundPermissionsAsync();
    if (granted) {
      setIsLoading(false);
      await LocalStorage.setLocation(true);
      const currentPosition = await getCurrentPositionAsync();
      setSession((prevSession) => ({
        ...prevSession,
        currentPosition,
      }));
      setLocation(currentPosition);
      handleNavigationNofitications();
      return;
    }
    setIsLoading(false);
    await LocalStorage.setLocation(false);
  }

  async function handleNavigationNofitications() {
    const onboard = await LocalStorage.getOnboard();
    console.log("=============onboard", onboard);
    if (onboard !== null) {
      navigation.navigate("InitialAccess");
      return;
    } else navigation.navigate("Onboard");
    return;
  }

  const viewModel: ILocationViewModel = {
    requestLocationPermissions,
    isLoading,
    location,
  };

  return viewModel;
};

export default useLocationViewModel;
