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

export const TopSearchComponent =({
    text
}) => {
    return(
        <View style={styles.combody}>
        <Text style={styles.comtext}>{text}</Text>
    </View>
    );
};

const styles =StyleSheet.create({
    combody:{
        height:24,
        borderRadius:4,
        backgroundColor:'#FCBE4B',
        marginRight:10,
        marginTop:10,
      },
      comtext:{
        fontSize:13,
       fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'ProximaNova-Semibold',
       fontStyle: 'oblique',
        color: '#373737',
        marginHorizontal:10,
        marginTop:5,
      }
})