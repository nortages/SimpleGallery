import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import dataReducer from './store/reducer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import HomeScreen from './components/HomeScreen';
import PhotoViewScreen from './components/PhotoViewScreen';

const middlewares = [thunk];
const store = createStore(dataReducer, applyMiddleware(...middlewares));


const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    PhotoView: PhotoViewScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const Navigation = createAppContainer(AppNavigator);

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};
