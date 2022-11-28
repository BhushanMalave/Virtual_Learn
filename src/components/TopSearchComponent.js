import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native';

export const TopSearchComponent = ({string,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.combody}>
      <Text style={styles.comtext}>{string}</Text>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  combody: {
    height: 24,
    borderRadius: 4,
    backgroundColor: '#FCBE4B',
    marginRight: 10,
    marginTop: 10,
  },
  comtext: {
    fontSize: 13,
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontWeight: 'bold',
    color: '#373737',
    marginHorizontal: 10,
    marginTop: 5,
  },
});
