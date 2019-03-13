import React, {Component} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import {HOME} from "../../routes/constants";
import NavBar from "../../layout/nav-bar/index";
import TopBar from "../shared/top-bar";
import NoneHeader from '../shared/headers/none';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.navigation.setParams({
    //   navigation: this.props.navigation,
    // })
  }

  static propTypes = {};

  static navigationOptions = () => {
    return {
      header: null,
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <TopBar barStyle={'dark-content'} backgroundColor={'#ffffff'} paddingTop={0}/>
        <View style={styles.bodyContainer}>
          <NavBar navigation={this.props.navigation} active={HOME} header={NoneHeader}>
          </NavBar>
        </View>

      </View>
    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default HomeScreen;
