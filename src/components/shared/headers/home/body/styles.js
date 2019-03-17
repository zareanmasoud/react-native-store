import {StyleSheet} from 'react-native';
import {GRAY, IRANSANS, IRANSANS_BOLD, IRANSANS_MEDIUM, WHITE} from "../../../../../styles/theme";

let row = {
  flexDirection: 'row',
};

export default StyleSheet.create({
  firstRow: {
    ...row,
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingStart: 20,
    paddingEnd: 10,
  },
  secondRow: {
    ...row,
    justifyContent: 'space-around',
    paddingStart: 20,
    paddingEnd: 20,
  },
  title: {
    fontFamily: IRANSANS,
    color: WHITE,
  },
  cartIcon: {

  },
  buttonView: {
    paddingVertical: 5,
  },
  selectedButtonTxt: {
    fontFamily: IRANSANS,
    fontSize: 11,
    color: WHITE,
  },
  buttonTxt: {
    fontFamily: IRANSANS,
    fontSize: 10,
    color: GRAY,
  },
})
