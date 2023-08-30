/* ------------------------------- Navigation ------------------------------- */

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './navigationTypes';

/* --------------------------------- Screens -------------------------------- */
import {SCREENS} from './screens';
import HomeScreen from '../screens/homeScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={SCREENS.HOME}>
      <Stack.Screen name={SCREENS.HOME} component={HomeScreen} />
    </Stack.Navigator>
  );
};
export default RootNavigation;
