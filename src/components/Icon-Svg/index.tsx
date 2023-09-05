import React from "react";
import { StyleSheet, View } from "react-native";
import { icons } from "./constant";
interface Props {
  name: string;
  className?: string;
  fill?: string;
  size?: "small" | "medium" | "large";
  color?:
    | "white"
    | "disabled"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "orange";
  onClick?: any;
}
const IconSvg = ({
  name = "",
  fill = "",
  size = "medium",
  color,
  onClick,
}: Props) => {
  const Icon = icons[name];
  return (
    <View
      style={[
        styles.icon,
        size === "small" ? styles.iconSmall : styles.icon,
        size === "medium" ? styles.iconMedium : styles.icon,
        size === "large" ? styles.iconLarge : styles.icon,
      ]}
    >
      <Icon />
    </View>
  );
};
const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    color: "#ffffff",
  },
  iconSmall: {
    width: 12,
    height: 12,
  },
  iconMedium: {
    width: 18,
    height: 18,
  },
  iconLarge: {
    width: 24,
    height: 24,
  },
});
export default IconSvg;
