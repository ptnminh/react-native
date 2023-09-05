import { Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./src/navigation/Tabs";
import BtnSearch from "./src/navigation/BtnSearch";
import BtnNotifications from "./src/navigation/BtnNotifications";
const tabsOptions = () => ({
  title: "Home",
  gestureEnabled: false,
  headerStyle: {
    height: 122,
    shadowRadius: 5,
    shadowOpacity: 0.15,
    shadowColor: "#309953",
    shadowOffset: { width: 0, height: 0 },
    elevation: 1,
  },
  headerTitle: ({ children }: any): any => <Text>{children}</Text>,
  headerLeft: () => <BtnSearch />,
  headerRight: () => <BtnNotifications />,
});
const Stack = createNativeStackNavigator();
export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Screen
        name="Home"
        component={Tabs}
        // options={(props: any) => tabsOptions(props)}
      />
    </NavigationContainer>
  );
}
