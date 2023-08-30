/* ------------------------------ Basic imports ----------------------------- */
import {StyleSheet} from 'react-native';
/* -------------------------------- Constants ------------------------------- */
import {COLORS} from '../../assets/colors';
import {FONT_FAMILIES} from '../../assets/fonts';
/* ---------------------------------- Utils --------------------------------- */

const styles = StyleSheet.create({
  linerGradient: {
    height: 50,
    width: '100%',
  },
  title: {
    alignSelf: 'center',
    color: COLORS.white,
    fontFamily: FONT_FAMILIES.SFProText.regular,
    fontSize: 12,
    lineHeight: 12,
    marginTop: 20,
  },

  arrow: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
});

export default styles;
