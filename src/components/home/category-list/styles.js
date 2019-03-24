import {StyleSheet} from 'react-native';
import {IRANSANS, IRANSANS_BOLD, TRANSPARENT_BLACK, WHITE} from "../../../styles/theme";

export default StyleSheet.create({
  contentContainer: {
    paddingTop: 15,
    backgroundColor: WHITE,
    paddingBottom: 150,
  },
  itemView: {
    marginVertical: 5,
    marginHorizontal: 20,
    height: 120,
  },
  itemImgBack: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  textContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleTxt: {
    fontFamily: IRANSANS_BOLD,
    fontSize: 20,
    color: WHITE,
    paddingVertical: 10,
  },
  descTxt: {
    fontFamily: IRANSANS,
    fontSize: 10,
    color: WHITE,
  },
  shadow: {
    backgroundColor: TRANSPARENT_BLACK,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
