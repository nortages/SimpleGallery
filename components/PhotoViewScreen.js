import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

import LoadingScreen from './LoadingScreen';


export default function PhotoView(props) {

  const { navigation } = props;
  const photo = navigation.getParam('photo');

  return (
    <View style={styles.centered}>
    <Image source={{uri: photo.urls.regular}}
       style={{width: '100%', height: '100%'}}
       resizeMode="contain"/>
    </View>
  );
};

const styles = StyleSheet.create({
  centered:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
   },
});