/* ------------------------------- Navigation ------------------------------- */

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './navigationTypes';

/* --------------------------------- Screens -------------------------------- */
import {SCREENS} from './screens';
import HomeScreen from '../screens/homeScreen';
import TranscriptionScreen from '../screens/transcriptionScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={SCREENS.home}>
      <Stack.Screen name={SCREENS.home} component={HomeScreen} />
      <Stack.Screen
        name={SCREENS.transcription}
        component={TranscriptionScreen}
      />
    </Stack.Navigator>
  );
};
export default RootNavigation;
