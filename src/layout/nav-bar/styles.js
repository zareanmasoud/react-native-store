import {StyleSheet} from 'react-native';

let navPlacement = {
  position: 'absolute',
  left: 0,
  right: 0,
};
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    ...navPlacement,
    top: 0,
  },
  bodyContainer: {
  },
  footer: {
    ...navPlacement,
    bottom: 0,
  },
  scrollView: {
    height: '103%',
  },
  scrollItem: {
    height: '103%',
  },
  text: {
    marginBottom: 60,
  },
});
