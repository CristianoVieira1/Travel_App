import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import InitialAccess from "../screens/InitialAccess";
import Onboard from "../screens/Onboard";
import LocationPermition from "../screens/Permissions/Location";
import { Register } from "../screens/Register";
import { SignIn } from "../screens/SignIn";
import { SplashScreen } from "../screens/SplashScreen";

const Stack = createNativeStackNavigator();

export const PublicRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName={"SplashScreenPage"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="SplashScreenPage" component={SplashScreen} />
      <Stack.Screen name="Location" component={LocationPermition} />
      <Stack.Screen name="InitialAccess" component={InitialAccess} />
      <Stack.Screen name="Onboard" component={Onboard} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};
