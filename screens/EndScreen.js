import React from "react";
import { StyleSheet, View, Button, Image } from "react-native";

import Card from "../components/Card";
import colors from "../constants/colors";
import TitleText from "../components/TitleText";

const EndScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText style={styles.title}>O melhor app de Suplementos</TitleText>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/photo-1549476464-37392f717541.jpeg")}
          resizeMode="cover"
        />
      </View>
      <Card style={styles.buttonContainer}>
        <Button
          title="Fazer nova busca"
          onPress={props.onRestart}
          color={colors.primary}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "flex-start",
    fontSize: 15
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%"
  },
  button: {
    width: 100
  },
  image: {
    width: "100%",
    height: "100%"
  },
  imageContainer: {
    borderRadius: 200,
    borderWidth: 2,
    borderColor: "black",
    overflow: 'hidden',
    marginVertical: 30,
    width: 300,
    height: 300
  }
});

export default EndScreen;
