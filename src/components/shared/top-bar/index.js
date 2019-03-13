import React from 'react';
import {View, StatusBar} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const TopBar = props => {
  return (
    <View style={styles.container(props.backgroundColor, props.paddingTop)}>
      <StatusBar
          barStyle={props.barStyle}
          backgroundColor={props.backgroundColor}
        />
    </View>
  );
};

TopBar.propTypes = {
  barStyle: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  paddingTop: PropTypes.number.isRequired,
};

export default TopBar;
