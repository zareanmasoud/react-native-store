import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import {HOME} from "../../../routes/constants";
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import {strings as _} from "../../../locales/i18n";
import {ACCOUNT, NEWS} from "./constants";
import {RED} from "../../../styles/theme";

const MainMenu = props => {
  return (
    <View style={styles.container}>
      <View style={[styles.row, styles.tabs]}>
        <TouchableHighlight onPress={() => {}}>
          <View>
            <View style={styles.button}>
              <Icon style={styles.homeIcon} name={'home'} size={40} color={props.active === HOME ? RED : 'gray'}/>
              <Text style={styles.homeTxt}>{_('home')}</Text>
            </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {}}>
          <View>
            <View style={styles.button}>
              <Icon5 style={styles.newspaperIcon} name={'newspaper'} size={40} color={props.active === NEWS ? RED : 'gray'}/>
              <Text style={styles.newsTxt}>{_('news')}</Text>
            </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {}}>
          <View>
            <View style={styles.button}>
              <Icon style={styles.userIcon} name={'user'} size={40} color={props.active === ACCOUNT ? RED : 'gray'}/>
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
