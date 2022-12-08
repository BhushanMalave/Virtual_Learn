import React from "react";
import { ActivityIndicator, Modal ,StyleSheet,View} from "react-native";
import { useSelector } from "react-redux";


export const SubmitModal =()=>{

    const submitState = useSelector(state=>state.finaltestdata)
    console.log(submitState)
    return(
        <Modal
      animationType="fade"
      transparent={true}
      visible={submitState}
    //   onRequestClose={() => {
    //     Alert.alert('Modal has been closed.');
    //     {
    //       dispatch(setFilterState());
    //     }
    //   }}
      >
      <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
        <ActivityIndicator animating={true} size="small" color="#373737">
        </ActivityIndicator>
      </View>
    </Modal>
    )
}