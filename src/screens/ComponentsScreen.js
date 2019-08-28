import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsSceen = () => {
const name = 'Imad Youssoufi';
  return (
    <View>
       <Text style={styles.textStyle}> Getting started with React Native </Text>
       <Text style={styles.subTextStyle}> My name is {name} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headTextStyle: {
    fontSize: 45,
  },
  subTextStyle :{
      fontSize: 20
  }
});

export default ComponentsSceen;
