import React from 'react'
import { StyleSheet, View, Image } from "react-native";
import BodyText from '../components/BodyText'

import colors from '../constants/colors'

const ProductContainer = props => {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri:
              "https://static.netshoes.com.br/produtos/whey-protein-100-whey-gold-standard-2-lbs-optimum-nutrition/99/165-7007-799/165-7007-799_zoom1.jpg?ims=652x"
          }}
          resizeMode="cover"
        />
        <BodyText style={styles.product}>{props.children}</BodyText>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: colors.accent,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  product: {
    color: colors.accent
  },
  image: {
    width: 100,
    height: 100
  }
});

export default ProductContainer