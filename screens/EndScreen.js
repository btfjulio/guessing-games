import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

import Card from "../components/Card";
import colors from "../constants/colors";

const EndScreen = props => {
  
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>O melhor app de Suplementos</Text>
      <Card style={styles.buttonContainer}>
        <Button title="Fazer nova busca" onPress={props.onRestart} color={colors.primary} />
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
  }
});

export default EndScreen;
