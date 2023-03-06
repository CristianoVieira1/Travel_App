import AsyncStorage from "@react-native-async-storage/async-storage";
import messaging, { firebase } from "@react-native-firebase/messaging";
import * as Notifications from "expo-notifications";
import { useEffect } from "react";
import { PushToken } from "../../../models/PushToken";

export const FirebaseNotifications = ({ children }: any) => {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
      priority: Notifications.AndroidNotificationPriority.HIGH,
    }),
  });

  const lastNotificationResponse = Notifications.useLastNotificationResponse();
  useEffect(() => {
    if (
      lastNotificationResponse &&
      lastNotificationResponse.notification.request.content &&
      lastNotificationResponse.actionIdentifier ===
        Notifications.DEFAULT_ACTION_IDENTIFIER
    ) {
      // if (lastNotificationResponse.notification.request.content.body !== '') {
      //   // navigation.navigate('Notifications[List]')
      // }
    }
  }, [lastNotificationResponse]);

  useEffect(() => {
    async function requestUserPermission() {
      const authStatus = await firebase.messaging().requestPermission();
      const enabled =
        authStatus === firebase.messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === firebase.messaging.AuthorizationStatus.PROVISIONAL;

      if (!enabled) {
        return;
      }

      try {
        const token = await messaging().getToken();
        const pushToken = await new PushToken().getPushToken();

        if (__DEV__) {
          console.log("token -> ", token);
          await AsyncStorage.setItem("@pushToken", token);
        }

        if (token && pushToken !== token) {
          await new PushToken().setPushToken(token);

          //call the api to save token
        }
      } catch (e: any) {
        if (__DEV__) {
          console.log(e.message);
        }
      }
    }

    requestUserPermission();
  }, []);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      console.log(remoteMessage);
      await Notifications.scheduleNotificationAsync({
        content: {
          title: remoteMessage?.notification?.title ?? "Travel",
          body: remoteMessage?.notification?.body,
          vibrate: [0, 250, 250, 250],
          sound: "default",
        },

        trigger: null,
      });
    });

    return unsubscribe;
  }, []);

  return children;
};

export default FirebaseNotifications;
