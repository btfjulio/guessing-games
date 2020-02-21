import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Button,
  Keyboard
} from "react-native";

import Card from "../components/Card";
import Input from "../components/Input";
import colors from "../constants/colors";

const StartScreen = props => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmedValue] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  const searchInputHandler = inputText => {
    setEnteredValue(inputText);
  };
  const resetInputHandler = () => {
    setEnteredValue('');
  };
  const confirmInputHandler = inputText => {
    setConfirmedValue(true);
    setSelectedProduct(enteredValue);
    setEnteredValue('');
  };

  let confirmedOutput;

  if(confirmed) {
    confirmedOutput = <Text>Chosen Product: {selectedProduct}</Text>
  }
  
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={styles.title}>O melhor app de Suplementos</Text>
        <Card>
          <Text>O que está procurando?</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            maxLength={20}
            onChangeText={searchInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Limpar"
                onPress={resetInputHandler}
                color={colors.primary}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Procurar"
                onPress={confirmInputHandler}
                color={colors.accent}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
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
    width: "100%"
  },
  button: {
    width: 100
  },
  input: {
    width: 150,
    textAlign: "center"
  }
});

export default StartScreen;
