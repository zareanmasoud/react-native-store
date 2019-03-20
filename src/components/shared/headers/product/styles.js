import {StyleSheet} from 'react-native';
import {GRAY, IRANSANS, RED, WHITE} from "../../../../styles/theme";

let row = {
  flexDirection: 'row',
};

export default StyleSheet.create({
  header: {
    backgroundColor: RED,
  },
  firstRow: {
    ...row,
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingStart: 20,
    paddingEnd: 10,
    paddingBottom: 10,
  },
  backBasketView: {
    flexDirection: 'row',
  },
  backBtnView: {
    marginTop: 3,
    paddingStart: 20,
    paddingEnd: 5,
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
  cartIcon: {},
  backIcon: {},
  buttonView: {
    paddingVertical: 5,
  },
  selectedButtonView: {
    paddingVertical: 5,
    borderBottomWidth: 1,
    color: WHITE,
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
});
