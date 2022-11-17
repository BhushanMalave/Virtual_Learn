import React from "react";
import { View,StyleSheet,Text,TouchableOpacity,FlatList,Image} from "react-native";


export const CategoriesComponent =({
       img,category
}) => {
    return(
        <View style={styles.categorycontainer}>
        <Image source={img} style={styles.img}/>
        <Text style={styles.categorytext}>{category}</Text>
      </View>
    );
};

const styles = StyleSheet.create({
    categorycontainer: {
        // backgroundColor:"pink",
        borderRadius: 6,
        // justifyContent:'space-between',
        // marginStart:10,
        margin: 5,
        borderWidth: 1,
        height: 30,
        // width:83,
        padding: 5,
        borderColor: '#D3D3D3',
        flexDirection: 'row',
    
        // borderColor:"#7A7A7A",
        // opacity:0.2,
      },
      categorytext: {
        height: 15,
        color: '#2B2B2B',
        fontFamily: 'Proxima Nova',
        fontSize: 12,
        fontWeight: 'bold',
        letterSpacing: 0,
        lineHeight: 15,
        marginHorizontal:5,
        marginVertical:3
      },
      img:{
        height:15,
        width:15,
        marginVertical:3,
        marginHorizontal:3
      },

})