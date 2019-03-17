import {StyleSheet} from 'react-native';
import {mainMenuButton, mainMenuImage} from "../../../styles/common";
import {IRANSANS} from "../../../styles/theme";

let buttonTxt = {
  lineHeight: 10,
  fontFamily: IRANSANS,
  fontSize: 10,
};

export default StyleSheet.create({
  charts: {
    ...mainMenuImage,
  },
  news: {
    ...mainMenuImage,
  },
  live: {
    ...mainMenuImage,
  },
  profile: {
    ...mainMenuImage,
  },
  home: {
    ...mainMenuImage,
  },
  button: {
    ...mainMenuButton,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 5,
  },
  homeIcon: {

  },
  newspaperIcon: {

  },
  userIcon: {

  },
  homeTxt: {
    ...buttonTxt,
  },
  newsTxt: {
    ...buttonTxt,
  },
  accountTxt: {
    ...buttonTxt,
  },

  container: {
    height: 90,
    // marginBottom: 30, /* only for IOS to give Space */
    backgroundColor: 'white'
  },
  toolbar: {
    justifyContent: 'flex-start',
  },
  search: {
    alignSelf: 'flex-end',
  },
  row: {
    flexDirection: 'row',
  },
  tabs: {
    justifyContent: 'space-around',
  },
});
