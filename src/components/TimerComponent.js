import React,{useRef} from 'react'
import { Text, View,StyleSheet } from 'react-native'
import CountDown from 'react-native-countdown-component'


export const TimerComponent=()=> {
  
return (
   <View>
         <CountDown
        until={60 * 29 + 0}
        size={14}
        onFinish={() => alert('Finished')}
        digitStyle={{backgroundColor: '#FFF'}}
        digitTxtStyle={{color: '#2BB5F4'}}
        timeToShow={['M','S']}
        timeLabels={{m:null,s:null}}
        showSeparator
        separatorStyle={{color:"#2BB5F4"}}
       
        
      />

   </View>
  )
}
