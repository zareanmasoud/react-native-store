import React from 'react';
import {View, Text, TouchableHighlight, Image} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import {BEST_SELLERS, HOME, NEWEST} from "../../../routes/constants";
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import {strings as _} from "../../../locales/i18n";

const MainMenu = props => {
  return (
    <View style={styles.container}>
      <View style={[styles.row, styles.tabs]}>
        <TouchableHighlight onPress={() => props.navigation.navigate(NEW)}>
          <View style={(props.active === NEWEST) && styles.selected}>
            <View style={styles.button}>
              <Icon style={styles.homeIcon} name={'home'} size={40} color={'gray'}/>
              <Text style={styles.homeTxt}>{_('home')}</Text>
            </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => props.navigation.navigate(HOME)}>
          <View style={(props.active === HOME) && styles.selected}>
            <View style={styles.button}>
              <Icon5 style={styles.newspaperIcon} name={'newspaper'} size={40} color={'gray'}/>
              <Text style={styles.newsTxt}>{_('news')}</Text>
            </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => props.navigation.navigate()}>
          <View style={(props.active === BEST_SELLERS) && styles.selected}>
            <View style={styles.button}>
              <Icon style={styles.userIcon} name={'user'} size={40} color={'gray'}/>
              <Text style={styles.accountTxt}>{_('account')}</Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  )
};

MainMenu.propTypes = {
  navigation: PropTypes.object.isRequired,
  active: PropTypes.string.isRequired,
};

export default MainMenu;
