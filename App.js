import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers/';
import thunk from 'redux-thunk';
import LoadingScreen from './screens/loading-screen';
import {firebaseConfig} from './data-sources/firebase-config.js';
import firebase from 'firebase';

import { Permissions, Notifications } from 'expo';


const store = createStore(reducer, applyMiddleware(thunk));

firebase.initializeApp(firebaseConfig);

// Ask for Push notifications when page is loaded
registerForPushNotifications = async () => {
  const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
  let finalStatus = status;

  if (status != 'granted') {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }

  if(finalStatus != 'granted') { return; }

  // Get Notification Token
  let token = await Notifications.getExpoPushTokenAsync();

  // Add token to firebase
  let uid = firebase.auth().currentUser.uid;
  firebase.database().ref('profiles').child(uid).update({
    expoPushToken: token
  })
}

export default class App extends React.Component {
  state = {
    notification: {},
  };
    componentDidMount() {
      registerForPushNotifications();
      this.listener = Expo.Notifications.addListener(this.listen)
    }
    componentDidUnmount() {
      this.listener && Expo.Notifications.removeListener(this.listen)
    }
    listen = ({ origin, data }) => {
      console.log("Cool Data", origin, data)
    }
    render() {
        return (
            <Provider store={store}>
                <LoadingScreen/>
            </Provider>
        );
    }
}
