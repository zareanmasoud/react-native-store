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

type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        I18nManager.forceRTL(true);
    }

    render() {
        return (
            <Provider store={store}>
                <Navigator/>
            </Provider>
        );
    }
}
