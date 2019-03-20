import {StyleSheet} from 'react-native';
import {GREEN_FONT, IRANSANS, IRANSANS_BOLD, IRANSANS_FANUM} from "../../../../../styles/theme";

export default StyleSheet.create({
  junkFoodView: {
    margin: 10,
    alignItems: 'flex-start'
  },
  junkFoodImg: {
    width: 130,
    height: 130,
  },
  titleTxt: {
    fontFamily: IRANSANS_BOLD,
    fontSize: 11,
    paddingHorizontal: 5,
    paddingTop: 10,
  },
  priceTxt: {
    fontFamily: IRANSANS_FANUM,
    fontSize: 12,
    paddingHorizontal: 5,
    color: GREEN_FONT
  }
})
