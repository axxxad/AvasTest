import { Image, View } from "react-native";
import React from "react";

export default function LevelIcon({ level, size, style }) {
  let image;
  if (level.toLowerCase() === "gold") {
    image = require("../assets/gold-crown.png");
  } else if (level.toLowerCase() === "ultimate") {
    image = require("../assets/ultimate-crown.png");
  } else if (level.toLowerCase() === "platinum") {
    image = require("../assets/platinum-crown.png");
  }

  return (
    <View
      style={[
        {
          backgroundColor: "white",
          width: size,
          height: size,
          borderRadius: size * 0.5,
          alignItems: "center",
          justifyContent: "center",
        },
        style,
      ]}
    >
      <Image style={{ width: size * 0.7, height: size * 0.7 }} source={image} />
    </View>
  );
}
