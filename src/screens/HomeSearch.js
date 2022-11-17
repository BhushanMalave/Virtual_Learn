import {TabRouter} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  FlatList,
  ScrollView,
  ImageBackground,
  TouchableHighlight,
  TouchableOpacity,
  Pressable,
  Platform,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


export const HomeSearch =() => {
    return(
        <View style={styles.body}>
            <View style={styles.topView}>
                <Image source={require('../assets/images/icn_back_header.png')} style={styles.imgback}/>
                <Text style={styles.texttop} >
                    Search
                </Text>
            </View>

            <View  style={styles.searchview}>
               <View style={styles.searchviewin}>
                <Image source={require('../assets/images/icn_search_course.png')}/>
                <TextInput
                
                 />
               </View>
               <Image source={require('../assets/images/icn_filter_search.png')}/>
            <View>

                </View>
            </View>
            <View>
                <Text>search from Categories</Text>
                <View>

                </View>
            </View>
            <TextInput>

                </TextInput>
        </View>
    )
}

const styles =StyleSheet.create({
body:{
    flex:1,
    marginHorizontal:24,
},
 topView:{
    marginTop:Platform.OS === 'android' ? 30:70 ,
    flexDirection:'row',
    
 },
 searchview:{
    height:40,
    width:"80%",
    marginTop:30,
    flexDirection:'row',
    justifyContent:'space-between',
 },
 searchviewin:{
    height:40,
    borderWidth:1,
    borderRadius:0.6,
    borderColor:'7A7A7A',
 },
 texttop:{
    fontFamily:Platform.OS === "ios" ? 'Proxima Nova' : 'ProximaNova-SemiBold',
    fontSize:20,
    fontStyle:'oblique',
    marginLeft:120,
    marginTop:Platform.OS === "ios" ? -5:-5,
 },
 imgback:{
   height:14,
   width:22,
   color:'#373737'
 },

});