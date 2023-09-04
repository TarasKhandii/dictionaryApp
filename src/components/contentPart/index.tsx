import {Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import {SvgXml} from 'react-native-svg';
import {ICONS} from '../../assets/icons';
import AlertMessage from '../alertMessage';
import {useState} from 'react';

const symbolsArr = ['AAA', 'BB', 'CC', 'DD', 'E', 'F'];

const ContentPart: React.FC = () => {
  const [active, setActive] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  return (
    <View style={styles.contentPart}>
      <Text style={styles.title}>Sample sentence of Time</Text>
      <View style={styles.mainPart}>
        <View style={styles.sentence}>
          <SvgXml xml={ICONS.sound} />
          {symbolsArr.map((item: string, index: number) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setActive(prev => !prev);
              }}
              style={{alignItems: 'center'}}>
              {true && <SvgXml xml={ICONS.anchor} />}
              <Text
                style={[
                  styles.textSentence,
                  active && styles.textSentenceActive,
                ]}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.line}></View>
        <Text style={styles.text}>Your birthday falls on September 12.</Text>
        <View style={styles.line}></View>
        <View style={styles.keyWordsBlock}>
          <View style={styles.keyWordsContent}>
            <SvgXml xml={ICONS.anchor} />
            <Text style={styles.keyWordsTitle}> Key Words :</Text>
            <Text style={styles.keyWordsText}> A B C D F </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              setOpenAlert(prev => !prev);
            }}
            style={styles.hint}>
            <SvgXml style={styles.hint} xml={ICONS.hint} />
            {openAlert && (
              <View style={styles.alertBlock}>
                <AlertMessage />
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ContentPart;
