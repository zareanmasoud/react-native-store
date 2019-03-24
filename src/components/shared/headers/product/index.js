import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {strings as _} from "../../../../locales/i18n";
import styles from './styles';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import {WHITE} from "../../../../styles/theme";

class ProductHeader extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <View style={styles.header}>
        <View style={styles.firstRow}>
          <Text style={styles.title}>{this.props.product.title}</Text>
          <View style={styles.backBasketView}>
            <Icon style={styles.cartIcon} name={'cart-plus'} size={25} color={'black'}/>
            <TouchableOpacity onPress={() => {this.props.navigation.goBack()}}>
              <View style={styles.backBtnView}>
                <Icon style={styles.backIcon} name={'arrow-left'} size={20} color={WHITE}/>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

ProductHeader.propTypes = {
  navigation: PropTypes.object,
  product: PropTypes.object.isRequired,
};

export default ProductHeader;
