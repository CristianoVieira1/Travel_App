import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { useTheme } from "styled-components";
import Home from "../account/Home";
import { Menu } from "../account/Menu";
import { Notifications } from "../account/Notifications";
import { Setings } from "../account/Setings";

const BottomNav = createBottomTabNavigator();

export const Tabs = () => {
  const theme = useTheme();
  return (
    <BottomNav.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: "transparent",
          borderTopWidth: 0,
          marginBottom: 10,
        },
      }}
    >
      <>
        <BottomNav.Screen
          name="Menu"
          component={Menu}
          options={() => ({
            headerBackTitleVisible: false,
            headerBackground: () => null,
            tabBarLabel: "",
            tabBarIcon: () => (
              <Feather name="menu" size={24} color={theme.colors.white} />
            ),
          })}
        />

        <BottomNav.Screen
          name="Home"
          component={Home}
          options={() => ({
            headerBackTitleVisible: false,
            headerBackground: () => null,
            tabBarLabel: "",
            tabBarIcon: () => (
              <Feather name="home" size={26} color={theme.colors.white} />
            ),
          })}
        />

        <BottomNav.Screen
          name="Notifications"
          component={Notifications}
          options={() => ({
            headerBackTitleVisible: false,
            headerBackground: () => null,
            tabBarLabel: "",
            tabBarIcon: () => (
              <Feather name="bell" size={24} color={theme.colors.white} />
            ),
          })}
        />

        <BottomNav.Screen
          name="Setings"
          component={Setings}
          options={() => ({
            headerBackTitleVisible: false,
            headerBackground: () => null,
            tabBarLabel: "",
            tabBarIcon: () => (
              <Feather name="settings" size={24} color={theme.colors.white} />
            ),
          })}
        />
      </>
    </BottomNav.Navigator>
  );
};
