import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import {PRODUCT} from "../../../../routes/constants";

const JunkFood = props => {
  return (
    <TouchableOpacity onPress={() => {props.navigation.navigate(PRODUCT, props.junkFood)}}>
      <View style={styles.junkFoodView}>
        <Image source={props.junkFood.image} style={styles.junkFoodImg}/>
        <Text style={styles.titleTxt}>{props.junkFood.title}</Text>
        <Text style={styles.priceTxt}>{props.junkFood.price}</Text>
      </View>
    </TouchableOpacity>
  )
};

JunkFood.propTypes = {
  junkFood: PropTypes.object.isRequired,
  navigation: PropTypes.object,
};

export default JunkFood;
