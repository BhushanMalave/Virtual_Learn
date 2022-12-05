import React from 'react';

import {Text, View, Image, TouchableOpacity} from 'react-native';

export const QuestionListComponent = props => {
  return (
    <View style={{marginTop: 15, flex: 1}}>
      <TouchableOpacity onPress={props.onPress}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text
              style={{
                fontSize: 14,
                fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
                fontWeight: Platform.OS == 'ios' ? 'bold':'normal',
                color: '#373737',
              }}>
              Question {props.questionId}
            </Text>
            {props.state === '1' ? (
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
                  fontWeight: Platform.OS == 'ios' ? 'bold':'normal',
                  color: '#1EAB0D',
                  marginTop: 10,
                }}>
                Correct Answer
              </Text>
            ) : (
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'proximanova-semibold',
                  fontWeight: Platform.OS == 'ios' ? 'bold':'normal',
                  color: '#EA2626',
                  marginTop: 10,
                }}>
                Wrong Answer
              </Text>
            )}
          </View>
          <Image
            source={require('../assets/images/icn_showanswer.png')}
            style={{marginRight: 25}}
          />
        </View>
        <View
          style={{
            borderWidth: 0.3,
            height: 1,
            marginTop: 15,
            color: '#7A7A7A',
            opacity: 0.2,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};
