import React from "react";
import { useNavigation } from "@react-navigation/native";

import { COLORS } from "../constants";
import { Button, Icon } from "../components";

export default (props: any) => {
  const navigation = useNavigation();
  return (
    <Button
      outlined
      color={COLORS.gray}
      onPress={() => {
        console.log("hello");
      }}
      icon={<Icon name="search" size={16} color={COLORS.black} />}
      style={{ marginHorizontal: 28 }}
      {...props}
    />
  );
};
