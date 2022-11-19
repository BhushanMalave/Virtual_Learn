import React from 'react'
import { View,StyleSheet,Image,Text, ScrollView, TouchableOpacity} from 'react-native'
import data from '../components/data'

export const Test=()=> {

   
  return (
    <View style={styles.maincontainer}>
        <ScrollView>

        <View style={styles.container}>
            <Image/>
            <Text style={styles.testname}>Model Test</Text>
        </View>

        {data.map(item=>(
            <Text>Question{item.data}</Text>
        ))}
        <View style={styles.bottomview}>
            <View style={styles.innerbtm}>
            <Text style={styles.chapter}>Chapter 3</Text>
            <Text style={styles.topic}>Setting up a new project</Text>
            </View>
            <TouchableOpacity>

            <Image source={require('../assets/images/Left.png')} style={styles.left}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image source={require('../assets/images/Right.png')}style={styles.right}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.buttonview}>
                    <Text style={styles.button}>Submit</Text>
                </View>
            </TouchableOpacity>
        </View>
        </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
    maincontainer:{
        flex:1,
    },
    container:{
      margin:25,
      borderWidth:1,
      height:700

    
    },
    testname:{
        height:35,
        color:"#2B2B2B",
        fontFamily:"Biko",
        fontSize:26,
        fontWeight:"bold",
        letterSpacing:0,
        lineHeight:25,
        marginTop:80
    },
    bottomview:{
        height:95,
       flexDirection:"row",
        borderWidth:1,
        backgroundColor:"#2BB5F4",
     
       
    },
    innerbtm:{
        flexDirection:"column",
      
      
        width:"60%",
        marginLeft:25,
        
       
    },
    chapter:{
        fontFamily:Platform.OS==='ios'?"Proxima Nova":"ProximaNova",
        color:"#FFFFFF",
        fontSize:16,
        fontWeight:"bold",
        marginBottom:5,
        marginTop:20
    },
    topic:{
        fontFamily:Platform.OS==='ios'?"Proxima Nova":"ProximaNova",
        color:"#FFFFFF",
        fontSize:12,
        
    },
    left:{
        marginTop:35,
        marginLeft:10
    },
    right:{
        marginTop:35,
        marginLeft:40
    },
    buttonview:{
        height:36,
        width:78,
        backgroundColor:"#EE5C4D",
        borderRadius:4.8
    },
    button:{
        height:21,
        color:"#FFFFFF",
        fontFamily:Platform.OS==='ios'?"Proxima Nova":"ProximaNova",
        fontSize:16,
        fontWeight:"600",
        letterSpacing:0,
        lineHeight:20,
        alignSelf:"center",
      

    }
    
})
