import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const csChapterResponse = createAsyncThunk(
    'chapterResponse/csChapterResponse',
    async ({token,id}) => {
        const options={
            headers:{
                Authorization:`Bearer ${token}`,
            }
        };
        try{
            const response = await axios.get(
                `https://virtual-learn-app-java.herokuapp.com/user/courseChapterResponse?courseId=${id}`,
                options,
            );
           
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },
);

const ChapterResponseSlice = createSlice({
    name:'chapterResponse',
    initialState:{
        data:null,
        status:null,
        continueData:null,
    popUpState:false,
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
        addContinueData:(state,action) => {
          state.continueData= null;
          state.continueData = action.payload
        },
    
        setPopUpState:(state , action) => {
          state.popUpState = !state.popUpState;
          console.log(state.popUpState)
        },

      },
    extraReducers: (builder) => {
        builder
        .addCase(csChapterResponse.pending ,(state, action) => {
          state.status = 'loading';
        })
        .addCase(csChapterResponse.fulfilled ,(state, action) => {
          state.status = 'success';
          state.data = action.payload;
        })
        .addCase(csChapterResponse.rejected, (state, action) => {
          state.status = 'failed';
        })
      },
})

export const {addChapterList,changeChapterListStatus,addContinueData,setPopUpState} =
ChapterResponseSlice.actions;

export default ChapterResponseSlice.reducer;