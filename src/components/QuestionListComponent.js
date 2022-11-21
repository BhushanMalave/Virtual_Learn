import React from 'react';

import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const QuestionListComponent = ({state,onPress}) => {
    return(
        <View style={{marginTop:15,flex:1}}>
            <TouchableOpacity onPress={onPress}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Text
            style={{
              fontSize: 14,
              fontFamily:
                Platform.OS === 'ios' ? 'Proxima Nova' : 'ProximaNova',
              fontWeight: 'bold',
              color:'#373737'
            }}>
            Question1
          </Text>
         {state ? ( <Text    style={{
              fontSize: 12,
              fontFamily:
                Platform.OS === 'ios' ? 'Proxima Nova' : 'ProximaNova',
              fontWeight: 'bold',
              color:'#1EAB0D',
              marginTop:10,
            }}>Correct Answer</Text>) : (
                <Text    style={{
                    fontSize: 12,
                    fontFamily:
                      Platform.OS === 'ios' ? 'Proxima Nova' : 'ProximaNova',
                    fontWeight: 'bold',
                    color:'#EA2626',
                    marginTop:10,
                  }}>Correct Answer</Text>
            )}
          
        </View>
        <Image source={require('../assets/images/icn_showanswer.png')} style={{marginRight:25,}}/>
      </View>
      <View style={{borderWidth: 0.3, height: 1,marginTop:15,color:'#7A7A7A',opacity:0.2}} />
      </TouchableOpacity>
      </View>
    );
};


