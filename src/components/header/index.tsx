import LinearGradient from 'react-native-linear-gradient';
import styles from './style';
import {Text, TouchableOpacity, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {ICONS} from '../../assets/icons';
import {useNavigation} from '@react-navigation/native';

interface HeaderProps {
  navArrow: boolean;
}

const Header: React.FC<HeaderProps> = ({navArrow}) => {
  const navigation = useNavigation();
  const navHandler = () => {
    navigation.goBack();
  };
  return (
    <LinearGradient
      style={styles.linerGradient}
      colors={['#3585BD', '#6CAEE7']}>
      <View>
        <Text style={styles.title}>New Grading Standard</Text>
        {navArrow && (
          <TouchableOpacity
            onPress={navHandler}
            style={styles.arrow}
            hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}>
            <SvgXml xml={ICONS.arrow} />
          </TouchableOpacity>
        )}
      </View>
    </LinearGradient>
  );
};

export default Header;
