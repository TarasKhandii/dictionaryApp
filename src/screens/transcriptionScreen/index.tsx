import {SafeAreaView} from 'react-native';
import styles from './style';
import Header from '../../components/header';
import ContentPart from '../../components/contentPart';

const TranscriptionScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.transcriptionScreen}>
      <Header navArrow={true} />
      <ContentPart />
    </SafeAreaView>
  );
};
export default TranscriptionScreen;
