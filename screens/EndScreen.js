import React from "react";
import { StyleSheet, View, Button, Image, Dimensions,ScrollView } from "react-native";

import Card from "../components/Card";
import colors from "../constants/colors";
import MainButton from "../components/MainButton";
import TitleText from "../components/TitleText";

const EndScreen = props => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText style={styles.title}>O melhor app de Suplementos</TitleText>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/photo-1549476464-37392f717541.jpeg")}
            resizeMode="cover"
          />
        </View>
        <MainButton onPress={props.onRestart}>Fazer nova busca</MainButton>
      </View>
    </ScrollView>
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
    fontSize: Dimensions.get('window').height < 400 ? 16 : 20,
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
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    borderRadius: Dimensions.get("window").width * 0.7 / 2,
    borderWidth: 2,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: Dimensions.get('window').height /  20
  }
});

export default EndScreen;
