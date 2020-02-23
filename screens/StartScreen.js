import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  Alert
} from "react-native";

import Card from "../components/Card";
import ProductContainer from "../components/ProductContainer";
import Input from "../components/Input";
import TitleText from "../components/TitleText";
import BodyText from "../components/BodyText";
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
  const confirmInputHandler = () => {
    setConfirmedValue(true);
    setSelectedProduct(enteredValue);
    setEnteredValue('');
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if(confirmed) {
    confirmedOutput = (
      <Card style={styles.sumaryContainer}>
        <BodyText>Selected Product:</BodyText>
        <ProductContainer>{selectedProduct}</ProductContainer>
        <Button title="Me leve para a loja" color={colors.accent} onPress={() => props.onSearch(selectedProduct)} />
      </Card>
    );
  }
  
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <TitleText style={styles.title}>O melhor app de Suplementos</TitleText>
        <Card>
          <BodyText>O que está procurando?</BodyText>
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
    justifyContent: "flex-start"
  },
  title: {
    marginVertical: 10
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 15
  },
  button: {
    width: 100
  },
  input: {
    width: 150,
    textAlign: "center"
  },
  sumaryContainer: {
    marginVertical: 20
  }
});

export default StartScreen;
