import React from 'react'
import { View ,Image,StyleSheet,Text, Platform} from 'react-native'
import { CategoriesComponent } from '../components/CategoriesComponent';
import { useDispatch, useSelector } from 'react-redux';
import {cdsbasicCourse} from '../redux/ThunkToolkit/categoryDisplayScreenApi/BasicCoursesApi';
import {cdsAdvanceCourse} from '../redux/ThunkToolkit/categoryDisplayScreenApi/AdvanceCourseApi';
import {cdsAllCourseOfCategory} from '../redux/ThunkToolkit/categoryDisplayScreenApi/AllCourseOfCategoryApi';
import {cdsSubCategories} from '../redux/ThunkToolkit/categoryDisplayScreenApi/SubCategoriesApi';



export const MyCourseEmptyScreen=({navigation})=> {

  const dispatch=useDispatch()

  const token = useSelector(state => state.userDetails.token);
  console.log(token)
  const categoriesData = useSelector(state => state.categories.data);
  return (
    <View>

    <View>
        <Image source={require('../assets/images/img_mycourse_empty.png')} style={styles.image}/>
        <Text style={styles.text1}>What will you learn first?</Text>
        <Text style={styles.text2}>Your courses will go here</Text>
    </View>
    <Text style={styles.category}>Categories</Text>
    <View
              style={{
                height: 104,
                width: '100%',
                flexDirection: 'row',
                flexWrap: 'wrap',
                display: 'flex',
                marginLeft: 10,
                marginTop: 10,
              }}>
                {categoriesData?.map(item => (
                <View key={item?.categoryId}>
                  <CategoriesComponent
                    id={item?.categoryId}
                    img={item?.categoryPhoto}
                    category={item?.categoryName}
                    onPress={() => {
                      dispatch(cdsbasicCourse({token, id: item?.categoryId}));
                      dispatch(cdsAdvanceCourse({token, id: item?.categoryId}));
                      dispatch(
                        cdsAllCourseOfCategory({token, id: item?.categoryId}),
                      );
                      dispatch(cdsSubCategories({token, id: item?.categoryId}));
                      navigation.navigate('CategoryDisplayScreen', {item});
                     
                    }}
                  />
                </View>
              ))}
            </View>

    </View>
  )
}


const styles=StyleSheet.create({
  image:{
  alignSelf:"center",
  marginTop:25
  },
  text1:{
    height:22,
    color:"#2B2B2B",
    fontFamily:Platform.OS==='ios'?"Proxima Nova" : "ProximaNova",
    fontSize:18,
    fontWeight:"600",
    letterSpacing:0,
    lineHeight:22,
    textAlign:"center",
    marginTop:20
  },
  text2:{
    height:17,
    color:"#7A7A7A",
    fontFamily:Platform.OS==='ios'?"Proxima Nova" : "ProximaNova",
    fontSize:14,
    fontWeight:"600",
    letterSpacing:0,
    lineHeight:17,
    textAlign:"center",
    marginTop:5,
    opacity:0.5
  },
  category: {
    height: 22,
    // width: 167,
    color: '#2B2B2B',
    fontFamily: Platform.OS == 'ios' ? 'Proxima Nova' : 'ProximaNova',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 0,
    lineHeight: 22,
    marginLeft: 15,
    marginTop:30
  }
  
})