import { images } from '../component/images';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {StyleSheet, Image} from 'react-native';

const IconButton = ({ type }) => {
  return (
    <TouchableOpacity style={styles.iconbutton}>
      <Image source={type} style={{width:25, height:25}}
      resizeMode="contain" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconbutton: {
    margin: 10,
  },
});

export default IconButton;