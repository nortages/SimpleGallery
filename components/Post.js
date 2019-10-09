import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

import moment from 'moment';


export default function Post(navigate, data) {
  return (
    <View>
      <Text style={styles.postHeader}>{data.item.user.username}</Text>
      <TouchableHighlight style={styles.list}
        onPress={() => navigate('PhotoView', {photo: data.item})}>
        <Image source={{uri: data.item.urls.regular}} style={{width: '100%', height: 300}}/>
      </TouchableHighlight>
      <View style={styles.postFooter}>
        <View>
          <Text style={{ fontWeight: 'bold', }}>{data.item.likes} likes</Text>
        </View>
        <View>
          <Text>{moment(data.item.user.updated_at).fromNow()}</Text>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  list:{
    backgroundColor: "#fff"
   },

  postHeader:{
    paddingVertical: 6,
    paddingHorizontal: 10,

    fontSize: 18,
    fontWeight: 'bold',
   },

  postFooter:{
    height: 30,
    paddingHorizontal: 10,

    flex: 1,
    flexWrap: 'wrap',
    alignContent: 'space-between',
    justifyContent: 'center',

    fontWeight: 'bold',
   },
});
