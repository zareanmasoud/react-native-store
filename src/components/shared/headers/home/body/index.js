import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {strings as _} from "../../../../../locales/i18n";
import styles from './styles';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {BEST_SELLERS, CATEGORY, NEWEST} from "./constants";

class HeaderBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: CATEGORY,
    }
  }

  render() {
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
            <TouchableOpacity onPress={() => this.setSelected(NEWEST)}>
              <View style={styles.buttonView}>
                {
                  this.state.selected === NEWEST ? (
                    <Text style={styles.selectedButtonTxt}>{_('newest')}</Text>
                  ) : (
                      <Text style={styles.buttonTxt}>{_('newest')}</Text>
                  )
                }
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => this.setSelected(CATEGORY)}>
              <View style={styles.buttonView}>
                {
                  this.state.selected === CATEGORY ? (
                    <Text style={styles.selectedButtonTxt}>{_('category')}</Text>
                  ) : (
                      <Text style={styles.buttonTxt}>{_('category')}</Text>
                  )
                }
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => this.setSelected(BEST_SELLERS)}>
              <View style={styles.buttonView}>
                {
                  this.state.selected === BEST_SELLERS ? (
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

  setSelected(selected) {
    this.setState({selected: selected});
  }
}

HeaderBody.propTypes = {
  navigation: PropTypes.object,
};

export default HeaderBody;
