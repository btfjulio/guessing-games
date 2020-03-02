import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Dimensions,
  ScrollView
} from "react-native";

import Card from "../components/Card";
import ProductContainer from "../components/ProductContainer";
import Input from "../components/Input";
import TitleText from "../components/TitleText";
import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";
import colors from "../constants/colors";

const StartScreen = props => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmedValue] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [buttonWidth, setButtonWidth] = useState(
    Dimensions.get("window").width / 4
  );
  const [cardWidth, setCardWidth] = useState(
    Dimensions.get("window").width / 1.2
  );

  const searchInputHandler = inputText => {
    setEnteredValue(inputText);
  };
  const resetInputHandler = () => {
    setEnteredValue("");
  };
  const confirmInputHandler = () => {
    setConfirmedValue(true);
    setSelectedProduct(enteredValue);
    setEnteredValue("");
    Keyboard.dismiss();
  };

    // code that rerun whenever the component is rerendered
  useEffect(() => {
    const updateLayout = () => {
      setButtonWidth(Dimensions.get("window").width / 4);
      setCardWidth(Dimensions.get("window").width / 1.2);
    };

    Dimensions.addEventListener("change", updateLayout);
    return () => {
      Dimensions.removeEventListener('change', updateLayout)
    }
  });

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.sumaryContainer}>
        <BodyText>Selected Product:</BodyText>
        <ProductContainer>{selectedProduct}</ProductContainer>
        <MainButton onPress={() => props.onSearch(selectedProduct)}>
          Me leve para a loja
        </MainButton>
      </Card>
    );
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={30}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.screen}>
            <TitleText style={styles.title}>
              O melhor app de Suplementos
            </TitleText>
            <Card styles={{width: cardWidth}}>
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
              <View style={{...styles.buttonContainer, width: cardWidth}}>
                <View style={{ width: buttonWidth }}>
                  <Button
                    title="Limpar"
                    onPress={resetInputHandler}
                    color={colors.primary}
                  />
                </View>
                <View style={{ width: buttonWidth }}>
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
      </KeyboardAvoidingView>
    </ScrollView>
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
    paddingHorizontal: 30,
    marginTop: 15
  },
  // button: {
  //   width: Dimensions.get("window").width / 4
  // },
  input: {
    width: "60%",
    maxWidth: "95%",
    minWidth: 150,
    textAlign: "center"
  },
  sumaryContainer: {
    marginVertical: 20
  }
});

export default StartScreen;
