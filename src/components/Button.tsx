import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "expo-ui-kit";
import { SIZES } from "../constants";

export default ({
  children,
  icon,
  haptic = true,
  onPress = () => {},
  ...props
}: any) => {
  const content = icon || children;

  const btnStyle = StyleSheet.flatten([
    styles.button,
    icon && styles.icon,
    props.style,
  ]);

  const handlePress = () => {};

  return (
    <Button {...props} onPress={handlePress} style={btnStyle}>
      {content}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: SIZES.radius,
    height: SIZES.base * 7.25,
    minHeight: "auto",
  },
  icon: {
    alignItems: "center",
    height: SIZES.base * 4.75,
    justifyContent: "center",
    width: SIZES.base * 4.75,
  },
});
