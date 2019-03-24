/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Navigator from './src/routes/navigator';
import store from './src/store/configure-store';
import {I18nManager} from 'react-native';
import RNRestart from 'react-native-restart';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!I18nManager.isRTL) {
      I18nManager.forceRTL(true);
      RNRestart.Restart();
    }
  }

  render() {
    return (
      <Provider store={store}>
        <Navigator/>
      </Provider>
    );
  }
}
