import React from 'react';
import {View, Text, TouchableHighlight, Image} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import {BEST_SELLERS, HOME, NEWEST} from "../../../routes/constants";

const MainMenu = props => {
  return (
    <View style={styles.container}>
      <View style={[styles.row, styles.tabs]}>
        <TouchableHighlight onPress={() => props.navigation.navigate(NEW)}>
          <View style={(props.active === NEWEST) && styles.selected}>
            <View style={styles.button}>
                <Text>{'test'}</Text>
              {/*<Image source={news} style={styles.news}/>*/}
            </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => props.navigation.navigate(HOME)}>
          <View style={(props.active === HOME) && styles.selected}>
            <View style={styles.button}>
              {/*<Image source={home} style={styles.home}/>*/}
            </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => props.navigation.navigate()}>
          <View style={(props.active === BEST_SELLERS) && styles.selected}>
            <View style={styles.button}>
              {/*<Image source={live} style={styles.live}/>*/}
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
