import React from "react";
import { View,StyleSheet,Text,TouchableOpacity,FlatList,Image, Pressable} from "react-native";


export const CategoriesComponent =({
       img,category,onPress
}) => {
    return(
      <Pressable onPress={onPress}>
        <View style={styles.categorycontainer}>
        <Image source={{uri:img}} style={styles.img}/>
        <Text style={styles.categorytext}>{category}</Text>
       </View>
       </Pressable>
    );
};

const styles = StyleSheet.create({
    categorycontainer: {
        borderRadius: 6,
        margin: 5,
        borderWidth: 1,
        height: 30,
        padding: 5,
        borderColor: '#D3D3D3',
        flexDirection: 'row',
      },
      categorytext: {
        height: 15,
        color: '#2B2B2B',
        fontFamily: Platform.OS === 'ios' ? 'Proxima Nova' : 'ProximaNova',
        fontWeight:'bold',
        fontSize: 12,
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