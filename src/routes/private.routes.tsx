// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeDetails from "@screens/account/HomeDetails";
import { Profile } from "@screens/account/Profile";
import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { Tabs } from "@screens/Tabs";
import CustomDrawer from "../components/CustomDrawer";
import { Attractions } from "../screens/account/Attractions";

// const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export const PrivateRoutes = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer />}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="HomeDetails" component={HomeDetails} />
      <Drawer.Screen name="Attractions" component={Attractions} />

      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
};
