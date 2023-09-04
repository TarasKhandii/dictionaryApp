/* ------------------------------ Basic imports ----------------------------- */
import {StyleSheet} from 'react-native';
/* -------------------------------- Constants ------------------------------- */
import {COLORS} from '../../assets/colors';
import {FONT_FAMILIES} from '../../assets/fonts';

const styles = StyleSheet.create({
  contentPart: {
    backgroundColor: COLORS.backgroundColor,
    height: '100%',
    flexDirection: 'column',
  },
  title: {
    marginTop: 16,
    marginBottom: 8,
    marginLeft: 16,
    fontSize: 14,
    lineHeight: 20,
    fontFamily: FONT_FAMILIES.Arial.regular,
    color: COLORS.lightGrey,
  },
  mainPart: {
    backgroundColor: COLORS.white,
    // height: 264,
    marginHorizontal: 16,
    borderRadius: 10,
    paddingHorizontal: 12,
  },
  sentence: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
    justifyContent: 'space-between',
    marginRight: 24,
    marginBottom: 28,
  },
  textSentence: {
    color: '#2D3942',
    fontSize: 20,
    lineHeight: 24,
    fontFamily: FONT_FAMILIES.PingFangSc.regular,
  },
  textSentenceActive: {
    backgroundColor: 'red',
  },
  line: {
    backgroundColor: '#2D394233',
    width: '100%',
    height: 1,
    //
  },
  text: {
    marginVertical: 14,
    color: COLORS.lightGrey,
  },
  keyWordsBlock: {
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 25,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  keyWordsContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  keyWordsTitle: {
    marginLeft: 9,
    color: COLORS.lightGrey,
    fontSize: 14,
    lineHeight: 20,
    fontFamily: FONT_FAMILIES.Arial.bold,
  },
  keyWordsText: {
    marginLeft: 9,
    color: COLORS.lightGrey,
    fontSize: 14,
    lineHeight: 20,
    fontFamily: FONT_FAMILIES.Arial.regular,
  },
  hint: {
    margin: 0,

    // justifyContent: 'flex-end',
    // alignSelf: 'flex-end',
  },
  alertBlock: {
    position: 'absolute',
    marginTop: 20,
    width: 100,
    height: 100,
    left: -245,
  },
});

export default styles;
