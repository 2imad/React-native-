import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  
  return (
    <View>
      <Text style={styles.text}>HoScreen</Text>
      <Button
        title="Go to components Demo"
        onPress={ () => navigation.navigate('Components')}
      />
      <Button
        title="Go to List Demo"
        onPress={ () => navigation.navigate('List')}
      />
      <Button
        title="Go to Image Screen"
        onPress={ () => navigation.navigate('ImageScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
   
  }
});

export default HomeScreen;
