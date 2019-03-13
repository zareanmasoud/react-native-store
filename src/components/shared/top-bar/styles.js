import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: function (backgroundColor, paddingTop) {
    return {
      paddingTop: paddingTop, /* only for IOS to give StatusBar Space */
      backgroundColor: backgroundColor
    }
  }
})
