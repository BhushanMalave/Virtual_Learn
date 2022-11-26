import React from 'react';

import {View, Text, Modal, StyleSheet} from 'react-native';

import {ButtonComponent} from '../Buttons';
import {ButtonComponent4} from '../Buttons';
import {useSelector, useDispatch} from 'react-redux';
import { setPopUpState } from '../../redux/ThunkToolkit/ChaptersApi/ChapterScreenApi';

export const ContinuePopUp = () => {
    const continueData = useSelector(state => state.chapterResponse.continueData);
  const filterState = useSelector(state => state.chapterResponse.popUpState);
  console.log(filterState)

  const dispatch = useDispatch();
  return (
    <Modal animationType="slide" transparent={true} visible={filterState} >
      <View style={styles.container}> 
        <View style={styles.containerView}>
          <View style={styles.messageContainer}>
            <View style={styles.textView}>
              <Text style={styles.textStyle}>Your Lesson paused at 1.21</Text>
              <Text style={styles.textStyle}>
                Do you want to continue watching
              </Text>
            </View>

            <View style={styles.buttonView}>
              <ButtonComponent
                text={'Continue Watching'}
                onPress={() => {
                  dispatch(setPopUpState());
                }}
              />
            </View>
            <View style={styles.buttonView}>
              <ButtonComponent4
                text={'Watch From Beginning'}
                onPress={() => {
                  dispatch(setPopUpState());
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#000000AA'
  },
  containerView: {
    backgroundColor: 'rgba(255,255,255,0.82)',
    height: 243,
    width: 297,
    borderRadius: 15.4,
  },
  messageContainer: {
    marginHorizontal: 24,
  },
  textView: {
    marginTop: 39.3,
    marginBottom: 7.5,
  },
  textStyle: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 12,
    letterSpacing: -0.07,
    //   fontFamily: 'SF Pro Text',
    lineHeight: 17.6,
  },
  buttonView: {
    marginTop: 14,
  },
});
