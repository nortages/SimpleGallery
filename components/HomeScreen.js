import React, {useEffect, useLayoutEffect} from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from 'react-navigation-hooks';

import { fetchDataPending, fetchDataSuccess, fetchDataError, setPageNum, refresh } from '../store/actions';
import { getdata, getdataPending, getdataError, getPageNum, getIsRefreshing } from '../store/reducer';
import LoadingScreen from './LoadingScreen';
import PhotoView from './PhotoViewScreen';
import Post from './Post';
import fetchData from './fetchData';

const ACCESS_KEY = '896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043'


export default function HomeScreen() {

  const data = useSelector(state => state.data);
  const pending = useSelector(state => state.pending);
  const error = useSelector(state => state.error);
  const page = useSelector(state => state.page);

  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  useEffect( () => {
    if (data.length === 0 && pending === false) {
      dispatch(fetchData(getURL(), data));
      dispatch(setPageNum(page + 1));
    }
  });

  const getURL = () => `https://api.unsplash.com/photos?client_id=${ACCESS_KEY}&page=${page}`

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#CED0CE",
        }}
      />
    );
  };

  handleLoadMore = () => {
    if (!pending) {
      dispatch(fetchData(getURL(), data));
      dispatch(setPageNum(page + 1));
    }
  };

  handleRefresh = () => {
    dispatch(refresh());
  };


  if (page == 1 && pending) {
    return(
      <LoadingScreen/>
  )}

  if (error != null) {
    return(
      <View style={styles.centered}>
        <Text>{error}</Text>
      </View>
  )}

  return (
    <View style={styles.container}>
      <FlatList
        data= {data}
        renderItem= {item => Post(navigate, item)}
        initialNumToRender= {10}
        keyExtractor= {(item, index) => index.toString()}
        ItemSeparatorComponent= {renderSeparator}

        onRefresh= {handleRefresh}
        refreshing= {pending}

        onEndReachedThreshold= {0.5}
        onEndReached= {handleLoadMore}

        removeClippedSubviews= {true}
      />
    </View>
  );
};

HomeScreen.navigationOptions = {
  title: 'Home'
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#fff",
   },
   centered:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
   },
});
