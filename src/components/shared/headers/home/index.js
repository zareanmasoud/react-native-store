import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {strings as _} from "../../../../locales/i18n";
import styles from './styles';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {BEST_SELLERS, CATEGORIES, NEWEST} from "../../../home/constants";

class HomeHeader extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <View style={styles.header}>
        <View style={styles.firstRow}>
          <Text style={styles.title}>{_('store')}</Text>
          <View>
            <Icon style={styles.cartIcon} name={'cart-plus'} size={20} color={'black'}/>
          </View>
        </View>
        <View style={styles.secondRow}>
          <View>
            <TouchableOpacity onPress={() => {console.log('NEWEST', NEWEST); this.props.setSelected(NEWEST);}}>
              <View style={this.props.selected === NEWEST ? styles.selectedButtonView : styles.buttonView}>
                {
                  this.props.selected === NEWEST ? (
                    <Text style={styles.selectedButtonTxt}>{_('newest')}</Text>
                  ) : (
                      <Text style={styles.buttonTxt}>{_('newest')}</Text>
                  )
                }
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => this.props.setSelected(CATEGORIES)}>
              <View style={this.props.selected === CATEGORIES ? styles.selectedButtonView : styles.buttonView}>
                {
                  this.props.selected === CATEGORIES ? (
                    <Text style={styles.selectedButtonTxt}>{_('category')}</Text>
                  ) : (
                      <Text style={styles.buttonTxt}>{_('category')}</Text>
                  )
                }
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => this.props.setSelected(BEST_SELLERS)}>
              <View style={this.props.selected === BEST_SELLERS ? styles.selectedButtonView : styles.buttonView}>
                {
                  this.props.selected === BEST_SELLERS ? (
                    <Text style={styles.selectedButtonTxt}>{_('best_sellers')}</Text>
                  ) : (
                      <Text style={styles.buttonTxt}>{_('best_sellers')}</Text>
                  )
                }
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

HomeHeader.propTypes = {
  navigation: PropTypes.object,
};

export default HomeHeader;
