import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';


export const CourseDataSlice = createSlice({
  name: 'courseData',
  initialState: {
    data: [],
    overview:[],
    continueData:[],
  },
  reducers: {

    addChapterList:(state , action) => {
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

    addPlayStatus: (state, action) => {
      state.data.chapterResponses.map(item => {
        item.lessonResponses.map(item => {
          if (item.lessonId == action.payload.id) {
            item.status = true;
          }
        });
      });
    },
    addContinueData:(state,action) => {
      state.continueData = action.payload
    },

    addOverView:(state,action)=>{
      state.overview = action.payload
    }

  },
});

export const {addChapterList,changeChapterListStatus, addPlayStatus,addContinueData,addOverView} =
CourseDataSlice.actions;

export default  CourseDataSlice.reducer;
