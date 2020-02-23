import React from "react";
import { Text, StyleSheet } from "react-native";

import colors from "../constants/colors";

const TitleText = props => {
  return (
    <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "open-sans-bold",
    fontSize: 20
  }
});

export default TitleText;
