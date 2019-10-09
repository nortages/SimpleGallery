import React from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';


export default function LoadingScreen() {

  return (
    <View style={styles.centered}>
      <ActivityIndicator size="large" color="#0c9"/>
    </View>
  );
}

const styles = StyleSheet.create({
  centered:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
   },
});