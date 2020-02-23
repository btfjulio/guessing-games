import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
// prolong the default loading screen to stay active, untill a certain task is done
import { AppLoading } from 'expo';

import Header from './components/Header';
import StartScreen from './screens/StartScreen';
import ProductScreen from "./screens/ProductScreen";
import EndScreen from "./screens/EndScreen";


const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
  });
};


export default function App() {
  const [selectedProduct, setSelectedProduct] = useState();
  const [endSearch, setEndSearch] = useState(false);

  const [dataLoaded, setDataLoaded] = useState(false)

  if (!dataLoaded) {
    return (
      <AppLoading 
        startAsync={fetchFonts} 
        onFinish={ () => setDataLoaded(true) }
        onError={ (err) => console.log(err) }
      />
    )
  };

  const restartSearch = () => {
    setEndSearch(false);
    setSelectedProduct(null);
  };

  const startSearchHandler = (selectedProduct) => {
    setSelectedProduct(selectedProduct);
    setEndSearch(false);
  }

  const endSearchHandler = finishedSearch => {
    setEndSearch(finishedSearch);
  };

  let content;  
  if (selectedProduct && !endSearch) {
    content = (
      <ProductScreen
        userSearch={selectedProduct}
        onEndSearch={endSearchHandler}
      />
    );
  } else if (endSearch) {
    content = (
      <EndScreen onRestart={restartSearch}/>
    )
  } else {
    content =  (
      <StartScreen onSearch={startSearchHandler} />
    )
  };

  return (
    <View style={styles.screen}>
      <Header title="SAVEWHEY" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
