import {StyleSheet} from 'react-native';
import {headingText} from '../../styles/common';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    ...headingText,
  },
  bodyContainer: {
    marginBottom: 30,
    // flex: .8,
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
