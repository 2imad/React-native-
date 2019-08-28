import React from 'react';
import { View , Text , StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {

     return (
        <View>
            <ImageDetail score="3" title='Forest' imgSrc={require('../../assets/beach.jpg')} />
            <ImageDetail score="11" title='Beach' imgSrc={require('../../assets/forest.jpg')} />
            <ImageDetail score="20" title='Mountain' imgSrc={require('../../assets/mountain.jpg')}/>
        </View>
     )
};

export default ImageScreen;