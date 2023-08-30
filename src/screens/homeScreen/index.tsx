import {SafeAreaView} from 'react-native';
import styles from './style';
import Header from '../../components/header';
import ContentPart from '../../components/contentPart';

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.homeScreen}>
      <Header />
      <ContentPart />
    </SafeAreaView>
  );
};
export default HomeScreen;
