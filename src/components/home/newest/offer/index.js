import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';

const Offer = props => {
  return(
    <View>
      <Text>{props.offer.title}</Text>
    </View>
  )
};

Offer.propTypes = {
  offer: PropTypes.object.isRequired,
};

export default Offer;
