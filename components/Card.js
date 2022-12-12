import {
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { getPoster } from '../api';

const Card = ({poster,onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      >
        <ImageBackground
          source={{ uri: getPoster(poster) }}
          style={styles.container}
          imageStyle={{ borderRadius: 12 }}
        />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
 container: {
    height: 290,
    width: 190,
    borderRadius: 12,
    elevation: 5,
    marginVertical: 17,
  },
});

export default Card;