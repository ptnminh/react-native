import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./Tabs";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Text } from "react-native";
import BtnSearch from "./BtnSearch";
import BtnNotifications from "./BtnNotifications";
import AppHeader from "../components/Header";
const tabsOptions = () => ({
  gestureEnabled: false,
  headerStyle: {
    height: 122,
    shadowRadius: 5,
    shadowOpacity: 0.15,
    shadowColor: "#309953",
    shadowOffset: { width: 0, height: 0 },
    elevation: 1,
    backgroundColor: "#309953",
    flex: 1,
    justifyContent: "space-around",
  } as any,
});
const Stack = createNativeStackNavigator();

const IndexNavigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ptnminh"
            component={Tabs}
            options={{
              header: () => <AppHeader />,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default IndexNavigation;
