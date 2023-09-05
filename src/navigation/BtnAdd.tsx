import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Button, Icon } from "../components";
import { COLORS } from "../constants";

export default (props: any) => {
  const navigation = useNavigation();

  return (
    <Button
      success
      style={{ marginHorizontal: 28 }}
      onPress={() => console.log("hello")}
      icon={<Icon name="plus" size={16} color={COLORS["--colorPrimary"]} />}
      {...props}
    />
  );
};
