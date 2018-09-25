import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import HistoryScreen from '../screens/HistoryScreen';

export default createStackNavigator({
    Home:  HomeScreen,
    History:  HistoryScreen
  });