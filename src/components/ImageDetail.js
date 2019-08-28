import React from "react";
import { View, Text, StyleSheet,Image } from "react-native";

const ImageDetail = props => {
  return(
      <View>
          <Image source={props.imgSrc}/>
          <Text> {props.title} </Text>
          <Text> Image score :  {props.score} </Text>
      </View>
  ) ;
};

export default ImageDetail;
