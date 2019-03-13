import {createStackNavigator} from 'react-navigation';
import LoginScreen from '../components/login'
import {LOGIN} from './constants';

export const AuthStack = createStackNavigator({
  [LOGIN]: {
    screen: LoginScreen,
  }
});
