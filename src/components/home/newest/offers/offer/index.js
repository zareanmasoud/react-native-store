import React from 'react';
import {View, Text, Image} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Offer = props => {
  return(
    <View style={styles.offerView}>
      <Image source={props.offer.image} style={styles.offerImg}/>
    </View>
  )
};

Offer.propTypes = {
  offer: PropTypes.object.isRequired,
};

export default Offer;
