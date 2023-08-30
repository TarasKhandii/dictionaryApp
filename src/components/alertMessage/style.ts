/* ------------------------------ Basic imports ----------------------------- */
import {StyleSheet} from 'react-native';
/* -------------------------------- Constants ------------------------------- */
import {COLORS} from '../../assets/colors';
import {FONT_FAMILIES} from '../../assets/fonts';

const styles = StyleSheet.create({
  alertMessage: {
    // width: '75%',
    width: 285,
  },
  alertMessageBlock: {
    height: 109,
    width: '100%',
    backgroundColor: COLORS.dark,
    borderRadius: 12,
  },
  title: {
    fontFamily: FONT_FAMILIES.SFProText.bold,
    color: COLORS.white,
    opacity: 0.65,
    fontSize: 14,
    lineHeight: 17,
    marginTop: 16,
    marginBottom: 16,
    alignSelf: 'center',
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: COLORS.white,
    alignSelf: 'center',
    paddingHorizontal: 26,
    fontFamily: FONT_FAMILIES.Biryani.semiBold,
  },
  triangle: {
    alignSelf: 'flex-end',
    marginRight: 16,
    color: COLORS.dark,
  },
});

export default styles;
