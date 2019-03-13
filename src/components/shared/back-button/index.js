import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import backImg from '../../../../assets/images/ic_back.png';
import PropTypes from 'prop-types';

const BackButton = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {
        props.navigation.navigate()
      }}>
        <View style={styles.backView}>
          <Image source={backImg} style={styles.backImg}/>
        </View>
      </TouchableOpacity>
    </View>
  )
};

BackButton.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default BackButton;
