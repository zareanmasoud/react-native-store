import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import styles from './styles';
import JunkFood from './related-product';
import junkFoods from './options';
import {strings as _} from "../../../locales/i18n";
import PropTypes from 'prop-types';

const JunkFoods = props => {
  return (
    <View style={styles.junkFoodsView}>
      <View style={styles.titleRow}>
        <Text style={styles.titleTxt}>{_('related_products')}</Text>
        <Text style={styles.allButtonTxt}>{_('show_all')}</Text>
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer} horizontal>
        {
          junkFoods.map((junkFood) => (<JunkFood key={junkFood.id} junkFood={junkFood} navigation={props.navigation}/>))
        }
      </ScrollView>
    </View>
  )
};

JunkFoods.propTypes = {
  navigation: PropTypes.object,
};

export default JunkFoods;
