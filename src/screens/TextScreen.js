import React, { useReducer } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';



const reducer = ( state , action ) =>  { 
    switch(action.type) {
         case 'change_name' : 
                 return { ...state, name:action.payload}
          default : return state        
    }
}
const TextScreen = () => {

    const [state, dispatch] = useReducer(reducer,{name:''})
    return (
        <View>
            <TextInput
                value = {state.name}
                autoCorrect = {false}
                autoCapitalize ='none'
                onChangeText = { (v) => dispatch({type:'change_name'  , payload:v })}
                style={styles.inputStyle} />
            <Text> {state.name} </Text>
             {state.name.length < 5 ? <Text> Password must be more than 5 characters </Text> : null }
        </View>
    )
}

const styles = StyleSheet.create({
    inputStyle: {
        margin: 15,
        padding: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});



export default TextScreen;