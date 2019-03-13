import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';

const NoneHeader = () => {
  return (
    <View/>
  )
};

NoneHeader.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default NoneHeader;
