import {createStackNavigator} from 'react-navigation';
import HomeScreen from '../components/home/index';
import {HOME} from './constants';

export const AppStack = createStackNavigator({
  [HOME]: {
    screen: HomeScreen
  },
});
