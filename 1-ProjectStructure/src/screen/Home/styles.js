import {StyleSheet, Dimensions} from 'react-native';

// local
import Colors from '../../constant/color';

// dimenstion
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY,
  },
});
