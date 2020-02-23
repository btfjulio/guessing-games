import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Alert
} from "react-native";

import Card from "../components/Card";
import ProductContainer from "../components/ProductContainer";
import colors from "../constants/colors";

const ProductScreen = props => {
  const [currentProduct, setCurrentProduct] = useState(props.userSearch);
  const copyCupomHandler = async cupomText => {
        Alert.alert('Cupom copiado com sucesso!', this.cupomText);
        props.onEndSearch(true);
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>O melhor app de Suplementos</Text>
      <ProductContainer>{currentProduct}</ProductContainer>
      <Card style={styles.buttonContainer}>
        <Button title="CUPOM" onPress={copyCupomHandler} color={colors.primary}/>
        <Button title="LOJA" onPress={()=>{}} color={colors.primary}/>
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

export default ProductScreen;
