import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  ImageBackground,
  Text,
} from 'react-native';

export const SearchFoundComponent = (props) => {
  return (
    <View style={styles.container} >
      <View style={styles.imageview}>
        <Image
          source={props.source}
          style={styles.image}
        />
      </View>
      <View style={{width: '85%'}}>
        <Text style={styles.name} >
          {props.name}
        </Text>
        <Text style={styles.chapters}>{props.chapter} Chapters</Text>
        <View style={styles.designview}>
          <Text style={styles.category}>{props.category}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,

    flexDirection: 'row',

    width: '100%',
  },
  imageview: {
    height: 51,
    width: 68,
  },
  name: {
    color: '#373737',
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 16,
 
  },
  chapters: {
    height: 12,

    color: '#7A7A7A',
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 10,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 12,
    marginTop: 3,
  },

  designview: {
    height: 15,
    width: 60,
    borderRadius: 3,
    backgroundColor: '#FCBE4B',
    marginTop: 3,
  },
  category: {
    height: 9,

    color: '#373737',
    fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 8,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 9,
    alignSelf: 'center',
    marginTop: 2,
  },
});
