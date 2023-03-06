import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from "expo-secure-store";
import { User } from "src/types/Account";

const userStorageKey = "@travel:user";
const onBoardStorageKey = "@travel:onBoard";
const locationStorageKey = "@travel:onLocation";

class LocalStorage {
  static async getUser(): Promise<any> {
    const userStorage = await SecureStore.getItemAsync(userStorageKey);
    return userStorage ? JSON.parse(userStorage) : null;
  }

  static async setUser(user: User) {
    await SecureStore.setItemAsync(userStorageKey, JSON.stringify(user));
  }

  static async getOnboard(): Promise<string | null> {
    const isBiometricEnabled = await AsyncStorage.getItem(onBoardStorageKey);
    return isBiometricEnabled ?? null;
  }

  static setOnboard(onboardToken: boolean): Promise<void> {
    return AsyncStorage.setItem(onBoardStorageKey, onboardToken.toString());
  }

  static async cleanOnboard(): Promise<unknown> {
    return await SecureStore.deleteItemAsync(onBoardStorageKey);
  }

  ////location

  static async getLocation(): Promise<string | null> {
    const isLocationEnabled = await AsyncStorage.getItem(locationStorageKey);
    return isLocationEnabled ?? null;
  }

  static setLocation(locationToken: boolean): Promise<void> {
    return AsyncStorage.setItem(locationStorageKey, locationToken.toString());
  }

  static async cleanLocation(): Promise<unknown> {
    return await SecureStore.deleteItemAsync(locationStorageKey);
  }

  static async clean(): Promise<unknown> {
    return await SecureStore.deleteItemAsync(userStorageKey);
  }
}

export default LocalStorage;
