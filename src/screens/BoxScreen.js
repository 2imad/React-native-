import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
      return (
          <View style={styles.container}>
              <Text style={styles.textItems}>BOX 1 </Text>
              <Text style={styles.middle}>BOX 2</Text>
              <Text style={styles.textItems}>BOX 3 </Text>
          </View>
      )
}

const styles = StyleSheet.create({ 
      container :{
          margin :3,
          height:400,
          borderWidth:3,
          borderColor:'green',
          flexDirection : 'row',
          justifyContent:'space-between'
      },
      textItems :{
          padding : 10
      },
      middle: {
          fontSize:14,
          alignSelf:"center"
      }
})


export default BoxScreen;