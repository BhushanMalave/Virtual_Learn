import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';


export const CourseDataSlice = createSlice({
  name: 'courseData',
  initialState: {
    data: [],
    overview:[],
    continueData:[],
    popUpState:false,
  },
  reducers: {

    addChapterList:(state , action) => {
      state.data = null;
      state.data = action.payload
    },
    changeChapterListStatus: (state, action) => {
      state.data.chapterResponses.map(item => {
        if (item.chapterId == action.payload.id) {
          console.log(action.payload.id);
          item.chapterStatus = !item.chapterStatus;
        }
      });
    },

    addContinueData:(state,action) => {
      state.continueData= null;
      state.continueData = action.payload
    },

    setPopUpState:(state , action) => {
      state.popUpState = !state.popUpState;
      console.log(state.popUpState)
    },

    addOverView:(state,action)=>{
      state.overview = action.payload
    }

  },
});

export const {addChapterList,changeChapterListStatus,addContinueData,setPopUpState,addOverView} =
CourseDataSlice.actions;

export default  CourseDataSlice.reducer;
