import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {APP, LOGIN} from '../../routes/constants';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: LOGIN,
      number: '',
    };
  }

  static navigationOptions = {
    header: null,
  };

  componentDidUpdate() {
    this.props.isLoggedIn && this.props.navigation.navigate(APP);
  }

  render() {
    return (
      <View/>
    );
  }
}

Login.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Login;
