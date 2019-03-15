import React from 'react';
import {View, TouchableHighlight, Image} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const TopMenu = props => {
  return (
    <View style={styles.container}>
      <View style={[styles.row, styles.tabs]}>
        <TouchableHighlight onPress={() => props.navigation.navigate()}>
          <View style={styles.button}>
            {/*<Image source={} style={styles.search}/>*/}
          </View>
        </TouchableHighlight>
        <View style={styles.redTypeContainer}>
          {/*<Image source={redType} style={styles.redType}/>*/}
        </View>
        <TouchableHighlight onPress={() => props.navigation.navigate()}>
          <View style={styles.button}>
            {/*<Image source={} style={styles.hamburger}/>*/}
          </View>
        </TouchableHighlight>
      </View>
      <View style={styles.separator}/>
    </View>
  )
};

TopMenu.propTypes = {
  navigation: PropTypes.object,
};

export default TopMenu;
