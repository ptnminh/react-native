import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS } from "../constants";
import { getHeaderButtons, getHeaderTitle } from "../utils/helper";
import { Icon } from "../components";
import Home from "../screens/Shopping";
import Events from "../screens/Event";
import NewPost from "../screens/NewPost";
import Messages from "../screens/Messages";
import MyProfile from "../screens/MyProfile";
import StoreColor from "../components/Icon-Svg/svg/store-color";
import MoneyBagDollarColor from "../components/Icon-Svg/svg/money-bag-dollar-color";
import OpenBookColor from "../components/Icon-Svg/svg/open-book-color";
import NotepadColor from "../components/Icon-Svg/svg/notepad-color";
import UserPolygonColor from "../components/Icon-Svg/svg/user-polygon-color";
import Store from "../components/Icon-Svg/svg/store";
import MoneyBagDollar from "../components/Icon-Svg/svg/money-bag-dollar";
import OpenBook from "../components/Icon-Svg/svg/open-book";
import Notepad from "../components/Icon-Svg/svg/notepad";
import UserPolygon from "../components/Icon-Svg/svg/user-polygon";
const Tab = createBottomTabNavigator();

const Tabs = ({ navigation, route }: any): any => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          switch (route.name) {
            case "Mua sắm":
              return focused ? <StoreColor /> : <Store />;
            case "Fxu":
              return focused ? <MoneyBagDollarColor /> : <MoneyBagDollar />;
            case "Blog":
              return focused ? <OpenBookColor /> : <OpenBook />;

            case "Đơn hàng":
              return focused ? <NotepadColor /> : <Notepad />;

            case "Tài khoản":
              return focused ? <UserPolygonColor /> : <UserPolygon />;
          }
        },
        tabBarLabel: ({ focused }) => {
          return (
            <Text
              style={{
                fontSize: 12,
                lineHeight: 16,
                fontWeight: "500",
                color: focused ? "#309953" : "#6C757D",
              }}
            >
              {route.name}
            </Text>
          );
        },
        tabBarStyle: {
          paddingTop: 10,
          height: 50,
        },

        tabBarIconStyle: {
          paddingTop: 5,
        },
      })}
    >
      <Tab.Screen
        name="Mua sắm"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Fxu"
        component={Events}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Blog"
        component={NewPost}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Đơn hàng"
        component={Messages}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Tài khoản"
        component={MyProfile}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
