import {StyleSheet} from 'react-native';
import {mainMenuButton, mainMenuImage} from "../../../styles/common";

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
    justifyContent: 'space-between',
  },
  selected: {
    borderBottomWidth: 2,
    borderBottomColor: 'red',
  },
});
