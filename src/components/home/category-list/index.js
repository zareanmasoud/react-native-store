import React from 'react';
import {ScrollView, View, TouchableOpacity, ImageBackground, Text} from 'react-native';
import styles from './styles';
import {
  COFFEE_DESC,
  COFFEE_TITLE,
  FAST_FOOD_DESC,
  FAST_FOOD_TITLE,
  SANDWICH_DESC,
  SANDWICH_TITLE,
  TART_DESC,
  TART_TITLE
} from "./constants";
import tartBackImg from '../../../../assets/images/category-list/anita-austvika-1128082-unsplash.png';
import sandwichBackImg from '../../../../assets/images/category-list/jonathan-pielmayer-583293-unsplash.png';
import coffeeBackImg from '../../../../assets/images/category-list/nathan-dumlao-290152-unsplash.png';
import fastFoodBackImg from '../../../../assets/images/category-list/taylor-harding-507059-unsplash.png';

const CategoryList = () => {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <TouchableOpacity onPress={() => {
      }}>
        <View style={styles.itemView}>
          <ImageBackground source={coffeeBackImg} style={styles.itemImgBack}/>
          <View style={styles.shadow}/>
          <View style={styles.textContainer}>
            <Text style={styles.titleTxt}>{COFFEE_TITLE}</Text>
            <Text style={styles.descTxt}>{COFFEE_DESC}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
      }}>
        <View style={styles.itemView}>
          <ImageBackground source={fastFoodBackImg} style={styles.itemImgBack}/>
          <View style={styles.shadow}/>
          <View style={styles.textContainer}>
            <Text style={styles.titleTxt}>{FAST_FOOD_TITLE}</Text>
            <Text style={styles.descTxt}>{FAST_FOOD_DESC}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
      }}>
        <View style={styles.itemView}>
          <ImageBackground source={tartBackImg} style={styles.itemImgBack}/>
          <View style={styles.shadow}/>
          <View style={styles.textContainer}>
              <Text style={styles.titleTxt}>{TART_TITLE}</Text>
              <Text style={styles.descTxt}>{TART_DESC}</Text>
            </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
      }}>
        <View style={styles.itemView}>
          <ImageBackground source={sandwichBackImg} style={styles.itemImgBack}/>
          <View style={styles.shadow}/>
          <View style={styles.textContainer}>
              <Text style={styles.titleTxt}>{SANDWICH_TITLE}</Text>
              <Text style={styles.descTxt}>{SANDWICH_DESC}</Text>
            </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CategoryList;
