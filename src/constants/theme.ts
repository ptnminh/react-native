// export const COLORS = {
//   // default font color
//   font: "#1E1F20",

//   // base colors
//   primary: "#0659FD",
//   secondary: "#79D0F1",

//   // non-colors
//   black: "#1E1F20",
//   white: "#FFFFFF",

//   // color variations
//   gray: "#8F92A1",
//   lightGray: "#F7F7F7",
//   error: "#FF4E4E",
//   success: "#53D769",
//   facebook: "#39579B",
// };
export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  h1: 30,
  h2: 22,
  h3: 16,
  title: 14,
  subtitle: 14,
  caption: 12,
  small: 12,
};

const WEIGHTS = {
  regular: "normal",
  bold: "bold",
  semibold: "600",
  medium: "500",
  light: "300",
};

import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
export const COLORS = {
  "--colorPrimary": "#309953",
  "--colorPrimary50": "#80D3A8",
  "--colorPrimary10": "#E5F6EE",
  "--colorSecondary": "#FF9310",
  "--colorThemeInfo": "#23BDEF",
  "--colorThemeError": "#F01638",
  "--colorThemeExtra": "#313087",
  "--colorBorderLine": "#F0F4F6",
  "--colorBackgroundF": "#F1F3F2",
  "--colorWhite": "#FFFFFF",
  "--colorGrey100": "#F8F9FA",
  "--colorGrey200": "#E9ECEF",
  "--colorGrey300": "#DEE2E6",
  "--colorGrey400": "#CED4DA",
  "--colorGrey500": "#ADB5BD",
  "--colorGrey600": "#6C757D",
  "--colorGrey700": "#495057",
  "--colorGrey800": "#343A40",
  "--colorGrey900": "#212529",
};
export const SHADOWS = {
  "--shadow1": "0 2px rgba(176, 183, 195, 0.12)",
  "--shadow2": "0 4px 2px rgba(176, 183, 195, 0.12)",
  "--shadow3": "0 4px 8px rgba(176, 183, 195, 0.12)",
  "--shadow4": "0 8px 24px rgba(176, 183, 195, 0.12)",
  "--shadow5": "0 24px 32px rgba(176, 183, 195, 0.24)",
  "--shadow6": "0 44px 64px rgba(176, 183, 195, 0.24) 20",
  "--shadow7": "0 60px 80px rgba(176, 183, 195, 0.24) 24",
  "--shadow": "0 60px 80px rgba(176, 183, 195, 0.24) 24",
  "--shadowMenu": "0 -8px 24px rgba(176, 183, 195, 0.4) 4",
  "--shadowPopup": "0 -44px 64px rgba(176, 183, 195, 0.2) 20",
  "--shadowBox": "0 4px 8px rgba(33, 37, 41, 0.8)",
};
// export const SIZES = {
//   width,
//   height,
// };

const FONTS = {
  h1: { fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontSize: SIZES.h3, lineHeight: 22 },
  title: { fontSize: SIZES.title, lineHeight: 20 },
  subtitle: { fontSize: SIZES.subtitle, lineHeight: 20 },
  caption: { fontSize: SIZES.caption, lineHeight: 22 },
  small: { fontSize: SIZES.small, lineHeight: 20 },
};
export const VARIANTS = {
  sub2: {
    fontSize: 14,
    lineHeight: 20,
  },
  sub3: {
    fontSize: 12,
    lineHeight: 16,
  },
  sub4: {
    fontSize: 10,
    lineHeight: 14,
  },
  caption2: {
    fontSize: 14,
    lineHeight: 16,
  },
  caption4: {
    fontSize: 10,
    lineHeight: 14,
  },
  button1: {
    fontSize: 14,
    lineHeight: 24,
  },
};
const appTheme = { COLORS, SIZES, FONTS, WEIGHTS };
