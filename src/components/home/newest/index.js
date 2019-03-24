import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import styles from './styles';
import Offers from './offers';
import JunkFoods from "./junk-foods";
import ElectedStores from "./elected-stores";
import PropTypes from 'prop-types';

const Newest = props => {
  return(
    <View style={{flex: 1, marginBottom: 50,}}>
      <Offers/>
      <JunkFoods navigation={props.navigation}/>
      <ElectedStores/>
    </View>
  )
};

Newest.propTypes = {
  navigation: PropTypes.object,
};

export default Newest;
