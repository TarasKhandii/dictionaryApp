/* ------------------------------ Basic imports ----------------------------- */
import {StyleSheet} from 'react-native';
/* -------------------------------- Constants ------------------------------- */
import {COLORS} from '../../assets/colors';
import {FONT_FAMILIES} from '../../assets/fonts';

const styles = StyleSheet.create({
  homeScreen: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.backgroundColor,
  },
  inputBlock: {
    alignItems: 'center',
  },

  title: {
    fontSize: 16,
    color: COLORS.dark,
    fontFamily: FONT_FAMILIES.Arial.regular,
    marginTop: 30,
    marginLeft: 20,
    marginBottom: 20,
  },
  input: {
    backgroundColor: COLORS.white,
    width: '80%',
    height: 50,
    borderRadius: 10,
    color: COLORS.dark,
    fontSize: 14,
    lineHeight: 16,
    fontFamily: FONT_FAMILIES.Arial.regular,
    paddingHorizontal: 15,
  },
  btn: {
    width: 140,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  btnText: {
    color: COLORS.white,
    fontSize: 14,
    lineHeight: 16,
    fontFamily: FONT_FAMILIES.Arial.regular,
  },
});

export default styles;
