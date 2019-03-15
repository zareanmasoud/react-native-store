import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {strings as _} from "../../../../../locales/i18n";
import styles from './styles';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

const HeaderBody = () => {
  return (
    <View>
      <View style={styles.firstRow}>
        <Text style={styles.title}>{_('store')}</Text>
        <View>
          <Icon style={styles.cartIcon} name={'cart-plus'} size={20} color={'black'}/>
        </View>
      </View>
      <View style={styles.secondRow}>
        <View>
          <TouchableOpacity onPress={() => {
          }}>
            <View style={styles.buttonView}>
              <Text style={styles.buttonTxt}>{_('best_sellers')}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => {
          }}>
            <View style={styles.buttonView}>
              <Text style={styles.buttonTxt}>{_('category')}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => {
          }}>
            <View style={styles.buttonView}>
              <Text style={styles.buttonTxt}>{_('newest')}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
};

HeaderBody.propTypes = {
  navigation: PropTypes.object,
};

export default HeaderBody;
