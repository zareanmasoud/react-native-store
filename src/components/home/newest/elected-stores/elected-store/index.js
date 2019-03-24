import React from 'react';
import {View, Text, Image} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const ElectedStore = props => {
  return(
    <View style={styles.electedStoreView}>
      <Image source={props.electedStore.image} style={styles.electedStoreImg}/>
    </View>
  )
};

ElectedStore.propTypes = {
  electedStore: PropTypes.object.isRequired,
};

export default ElectedStore;
