import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "./Icon";
import IconSvg from "./Icon-Svg";
import CartCheck from "./Icon-Svg/svg/cart-check";
import Favourite from "./Icon-Svg/svg/favourite";

const AppHeader = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#309953" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 16,
          paddingVertical: 12,
        }}
      >
        {/* Logo on the left */}
        <Image
          source={require("../../assets/logo-white.png")}
          style={{ width: 64, height: 34 }}
          resizeMode="contain"
        />

        {/* Notification icon on the right */}
        <TouchableOpacity style={styles.iconRight}>
          <Favourite />
          <CartCheck />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default AppHeader;

const styles = StyleSheet.create({
  iconRight: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
});
