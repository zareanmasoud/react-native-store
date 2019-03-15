import {StyleSheet} from 'react-native';
import {IRANSANS, IRANSANS_BOLD, IRANSANS_MEDIUM, WHITE} from "../../../../../styles/theme";

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
  buttonTxt: {
    fontFamily: IRANSANS,
    color: WHITE,
  },
})
