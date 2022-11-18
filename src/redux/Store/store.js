import {configureStore} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import {combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import filterReducer from '../ReduxPersist/FilterSlice';
import hsTopHeadersReducer from '../ThunkToolkit/HomeScreenApiCalls/homeScreenTopHeaders';
import userDetailsReducer from '../ReduxPersist/UserDetails'
import hsCategoriesReducer from '../ThunkToolkit/HomeScreenApiCalls/homeScreenCategories';
import choiceYourCourseReducer from '../ReduxPersist/ChoiceYourCourseSlice'
import topCoursesReducer from '../ThunkToolkit/HomeScreenApiCalls/homeScreenTopCourses'


const persistConfig = {
    key: 'root',
    version: 1,
    storage: AsyncStorage,
  };

  const reducer = combineReducers({
    filterState:filterReducer,
    topHeader:hsTopHeadersReducer,
    userDetails:userDetailsReducer,
    categories:hsCategoriesReducer,
    choiceYourCourse:choiceYourCourseReducer,
    topCourses:topCoursesReducer,

  });


  const persistRed = persistReducer(persistConfig, reducer);

  export default configureStore({
    reducer: persistRed,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });