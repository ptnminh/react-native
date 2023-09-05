import React from "react";

import { COLORS } from "../constants";
import { Button, Icon } from "../components";

export default ({
  iconColor = COLORS.black,
  renderOptions = () => {},
  ...props
}) => {
  return (
    <>
      <Button
        outlined
        color={COLORS.gray}
        style={{ marginHorizontal: 28, borderWidth: 2 }}
        icon={<Icon name="options" size={16} color={iconColor} />}
        {...props}
      />
      {renderOptions()}
    </>
  );
};
