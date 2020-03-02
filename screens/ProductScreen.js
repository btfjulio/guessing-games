import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Alert,
  Dimensions,
  ScrollView
} from "react-native";

import Card from "../components/Card";
import ProductContainer from "../components/ProductContainer";
import MainButton from "../components/MainButton";
import colors from "../constants/colors";

const ProductScreen = props => {
  const [currentProduct, setCurrentProduct] = useState(props.userSearch);

  const copyCupomHandler = async cupomText => {
    Alert.alert("Cupom copiado com sucesso!");
    props.onEndSearch(true);
  };

  return (
    <ScrollView>
      <View style={styles.screen}>
        <Text style={styles.title}>O melhor app de Suplementos</Text>
        <ProductContainer>{currentProduct}</ProductContainer>
        <Card style={styles.buttonContainer}>
          <MainButton onPress={copyCupomHandler}>CUPOM</MainButton>
          <MainButton onPress={() => {}}>LOJA</MainButton>
        </Card>
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
    fontSize: 20,
    marginVertical: 10
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    marginTop: Dimensions.get("window").height > 600 ? 20 : 10
  },
  button: {
    width: 100
  }
});

export default ProductScreen;
