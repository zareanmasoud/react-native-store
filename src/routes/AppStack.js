import {createStackNavigator} from 'react-navigation';
import HomeScreen from '../components/home/index';
import {HOME, PRODUCT} from './constants';
import ProductScreen from "../components/product";

export const AppStack = createStackNavigator({
  [HOME]: {
    screen: HomeScreen
  },
  [PRODUCT]: {
    screen: ProductScreen
  }
});
