import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS } from "../constants";
import { getHeaderButtons, getHeaderTitle } from "../utils/helper";
import { Icon } from "../components";
const Tab = createBottomTabNavigator();

const tabOptions = {
  showLabel: false,
  activeBackgroundColor: COLORS.white,
  inactiveBackgroundColor: COLORS.gray,
  style: {
    backgroundColor: COLORS.primary,
    height: 122,
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    alignItems: "center",
    paddingTop: 25,
    // shadow
    shadowRadius: 5,
    shadowOpacity: 0.15,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 0 },
    elevation: 6,
  },
  tabStyle: {
    borderRadius: 12,
    maxHeight: 38,
    minHeight: 38,
    maxWidth: 38,
    marginHorizontal: 16,
  },
};
const Tabs = ({ navigation, route }: any): any => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: <Text>{getHeaderTitle(route)}</Text>,
      ...getHeaderButtons({ navigation, route }),
    });
  }, [navigation, route]);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const tintColor = focused ? COLORS.primary : COLORS.white;
          switch (route.name) {
            case "Home":
              return (
                <Icon name="home" color={tintColor} resizeMode="contain" />
              );

            case "Events":
              return (
                <Icon name="calendar" color={tintColor} resizeMode="contain" />
              );

            case "NewPost":
              return (
                <Icon name="addPost" color={tintColor} resizeMode="contain" />
              );

            case "Messages":
              return (
                <Icon name="message" color={tintColor} resizeMode="contain" />
              );

            case "MyProfile":
              return (
                <Icon name="user" color={tintColor} resizeMode="contain" />
              );
          }
        },
      })}
      //tabBarOptions={tabOptions}
    >
      {/* <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Events" component={Events} />
      <Tab.Screen
        name="NewPost"
        component={NewPost}
        options={{ style: { shadowOpacity: 0 } }}
      />
      <Tab.Screen name="Messages" component={Messages} />
      <Tab.Screen name="MyProfile" component={MyProfile} /> */}
    </Tab.Navigator>
  );
};

export default Tabs;
