import { Platform } from "react-native";

import colors from "./colors";

export default {
  colors,
  text: {
    color: colors.badanga,
    fontSize: 12,
    fontWeight: "400",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
