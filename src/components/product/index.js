import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import TopBar from "../shared/top-bar";
import ProductHeader from "../shared/headers/product";
import ProductCarousel from './product-carousel';
import junkFoods from "../home/newest/junk-foods/options";
import {Dropdown} from 'react-native-material-dropdown';
import RelatedProducts from "./related-products";
import {strings as _} from "../../locales/i18n";
import {RED} from "../../styles/theme";

class ProductScreen extends Component {
  constructor(props) {
    super(props);
    const itemId = this.props.navigation.state.params.id;
  }

  componentDidMount() {
    this.props.navigation.setParams({
      navigation: this.props.navigation,
    })
  }

  static propTypes = {};

  render() {
    let data = [{
      value: '1',
    }, {
      value: '2',
    }, {
      value: '3',
    }];
    return (
      <View style={styles.container}>
        <TopBar barStyle={'light-content'} backgroundColor={RED} paddingTop={0}/>
        <View style={styles.bodyContainer}>
          <ProductHeader navigation={this.props.navigation} product={this.props.navigation.state.params}/>
          <ScrollView contentContainerStyle={styles.contentContainer}>
            <View style={styles.productView}>
              <ProductCarousel data={this.props.navigation.state.params.images}/>
              <View style={styles.titlePriceView}>
                <Text style={styles.titleTxt}>{this.props.navigation.state.params.title}</Text>
                <Text style={styles.priceTxt}>{this.props.navigation.state.params.price}</Text>
              </View>
              <Text style={styles.descriptionTxt}>{this.props.navigation.state.params.description}</Text>
              <Dropdown label={_('how_many')} data={data}/>
            </View>
            <RelatedProducts navigation={this.props.navigation}/>
          </ScrollView>
          <View style={styles.basketBtnView}>
            <TouchableOpacity>
              <View style={styles.submitBtnView}>
                <Text style={styles.submitBtnTxt}>{_('add_to_basket')}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

ProductScreen.navigationOptions = ({navigation}) => {
  const {params = {}} = navigation.state;
  return {
    header: null,
  };
};

ProductScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ProductScreen;
