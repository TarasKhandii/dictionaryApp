import {Text, View} from 'react-native';
import styles from './style';
import {SvgXml} from 'react-native-svg';
import {ICONS} from '../../assets/icons';

const AlertMessage: React.FC = () => {
  return (
    <View style={styles.alertMessage}>
      <SvgXml xml={ICONS.triangle} style={styles.triangle} />
      <View style={styles.alertMessageBlock}>
        <Text style={styles.title}>What is Key Words?</Text>
        <Text style={styles.description}>
          Used to identify the key words or structures of this grammar point.
        </Text>
      </View>
    </View>
  );
};
export default AlertMessage;
