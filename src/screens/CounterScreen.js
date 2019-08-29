import React, { useReducer} from 'react';
import { View , Button , Text} from 'react-native';


const reducer = ( state , action ) =>  { 
    switch(action.type) {
        case 'Inc' : 
            return { ...state , count: state.count + action.payload }
        case 'Dec' : 
            return { ...state , count: state.count - action.payload }
        default : 
            return state          
    }
}

const CounterScreen = () => {
 const [ state , dispatch ] = useReducer(reducer, { count: 0 } )
 
   return (
       <View>
           <Button 
              title="Increase" onPress={() => dispatch({type :'Inc', payload:1})}/>
           <Button 
              title="Decrease" onPress={() => dispatch({type:'Dec', payload:1})}/>
           <Text>The current Count : {state.count}  </Text>     
       </View>
   )
}

export default CounterScreen