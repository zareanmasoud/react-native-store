import {StyleSheet} from 'react-native';
import {BLACK, IRAN_SANS_MOBILE, WHITE} from '../../../../styles/theme';
import {headingText, textButton} from '../../../../styles/common';
export default StyleSheet.create({
  container: {},
  gallery: {
    height: 300,
    width: '100%',
    marginTop: 1,
    paddingTop: 10,
    backgroundColor: WHITE,
  },
  imageContainer: {
    width: '100%',
    height: 247,
  },
  image: {
    flex: 1,
  },
  titleBox: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingStart: 30,
    paddingBottom: 10,
    paddingEnd: 10,
  },
  createdAtButton: {
    borderWidth: 1,
    borderColor: WHITE,
    borderRadius: 15,
    paddingTop: 3,
    paddingBottom: 0,
    paddingStart: 5,
    paddingEnd: 5,
  },
  createdAt: {
    fontFamily: IRAN_SANS_MOBILE,
    fontSize: 8,
    color: WHITE,
  },
  titleContainer: {
  },
  title: {
    fontFamily: IRAN_SANS_MOBILE,
    fontSize: 12,
    color: WHITE,
    writingDirection: 'rtl',
  },
  bodyContainer: {
    paddingStart: 30,
    paddingEnd: 30,
    paddingTop: 5,
  },
  body: {
    fontFamily: IRAN_SANS_MOBILE,
    fontSize: 10,
    color: '#626262',
    writingDirection: 'rtl'
  },

  panel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  name: {
    ...headingText,
    color: BLACK
  },
  titleTextButton: {
    ...textButton
  },
});
