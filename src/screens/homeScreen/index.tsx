import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Alert,
  TextInput,
} from 'react-native';

import styles from './style';
import Header from '../../components/header';
import {SvgXml} from 'react-native-svg';
import {ICONS} from '../../assets/icons';
import {SCREENS} from '../../navigation/screens';
import {RootStackScreenType} from '../../navigation/navigationTypes';
import {Formik} from 'formik';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen: RootStackScreenType<SCREENS.home> = ({navigation}) => {
  const navHandler = () => {
    navigation.navigate(SCREENS.transcription);
  };

  return (
    <SafeAreaView style={styles.homeScreen}>
      <Header navArrow={false} />
      <Formik
        initialValues={{checkWords: ''}}
        onSubmit={v => {
          console.log(v.checkWords);
          navHandler();
        }}>
        {({handleChange, handleSubmit, values}) => {
          return (
            <>
              <Text style={styles.title}>Title to the input:</Text>
              <View style={styles.inputBlock}>
                <TextInput
                  style={styles.input}
                  value={values.checkWords}
                  onChangeText={handleChange('checkWords')}
                />
                <LinearGradient
                  style={styles.btn}
                  colors={['#3585BD', '#6CAEE7']}>
                  <TouchableOpacity onPress={handleSubmit}>
                    <Text style={styles.btnText}>Submit</Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            </>
          );
        }}
      </Formik>
    </SafeAreaView>
  );
};

export default HomeScreen;
