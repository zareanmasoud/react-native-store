import React from 'react';
import PropTypes from 'prop-types';
import {
  StatusBar,
  View,
} from 'react-native';
import Loader from '../shared/loader/index';
import {APP, AUTH} from '../../routes/constants';
import styles from './styles';

export class AuthLoading extends React.Component {
  constructor(props) {
    super(props);
    this.checkIsAuthenticated();
  }

  checkIsAuthenticated = () => {
    this.props.navigation.navigate(APP);
  };

  render() {
    return (
      <View style={styles.container}>
        <Loader/>
        <StatusBar barStyle="default"/>
      </View>
    );
  }
}

AuthLoading.propTypes = {
  navigation: PropTypes.object.isRequired
};
