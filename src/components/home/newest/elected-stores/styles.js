import {StyleSheet} from 'react-native';
import {IRANSANS, RED_FONT, WHITE} from "../../../../styles/theme";

export default StyleSheet.create({
  electedStoresView: {
    backgroundColor: WHITE,
    borderRadius: 10,
    margin: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    paddingBottom: 10,
  },
  contentContainer: {
    flex: 1,
    paddingVertical: 10,
    // height: 200,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  titleTxt: {
    fontFamily: IRANSANS,
    fontSize: 14,
  },
  allButtonTxt: {
    fontFamily: IRANSANS,
    fontSize: 12,
    color: RED_FONT,
    marginTop: 5,
  },
});
