import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import Body from './body';
import styles from './styles';

const HomeHeader = props => {
  return (
    <View style={styles.header}>
      <Body navigation={props.navigation}/>
    </View>
  )
};

HomeHeader.propTypes = {
  navigation: PropTypes.object,
};

export default HomeHeader;
