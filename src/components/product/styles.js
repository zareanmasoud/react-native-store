import {StyleSheet} from 'react-native';
import {headingText} from '../../styles/common';
import {GRAY_FONT, GREEN_FONT, GREEN_SUBMIT, IRANSANS, IRANSANS_BOLD, IRANSANS_FANUM, WHITE} from "../../styles/theme";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    ...headingText,
  },
  bodyContainer: {
    // marginBottom: 30,
    // flex: .8,
    flex: 1,
  },
  contentContainer: {

  },
  productView: {
    paddingHorizontal: 15,
    backgroundColor: WHITE,
    marginBottom: 5,
  },
  titlePriceView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleTxt: {
    fontFamily: IRANSANS_BOLD,
    fontSize: 16,
  },
  priceTxt: {
    fontFamily: IRANSANS_FANUM,
    fontSize: 14,
    color: GREEN_FONT
  },
  descriptionTxt: {
    fontFamily: IRANSANS,
    fontSize: 14,
    color: GRAY_FONT,
    writingDirection: 'rtl',
  },
  basketBtnView: {
    // bottom: -30,
  },
  submitBtnView: {
    backgroundColor: GREEN_SUBMIT,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  },
  submitBtnTxt: {
    fontFamily: IRANSANS_BOLD,
    fontSize: 16,
  },
  sliderView: {

  },
  slideImg: {
    width: 150,
    height: 150,
    position: 'absolute',
  },
  footer: {
    // flex: .2,
  },
  scrollView: {
    // padding: 20,
  },
  scrollItem: {

  },
  text: {
    marginBottom: 60,
  },
  fixedFooter: {
    // backgroundColor: 'blue',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    // height: 50,
  },
});
