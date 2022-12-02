import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import Toast from 'react-native-simple-toast'

export const csChapterResponse = createAsyncThunk(
  'chapterResponse/csChapterResponse',
  async ({token, id}) => {
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.get(
        `https://virtual-learning-app-java.herokuapp.com/user/courseChapterResponse?courseId=${id}`,
        options,
      );

      return response.data;
    } catch (error) {
      console.log('chpscr', error);
      Toast.show('Something Went Wrong,Try Again!!!',Toast.SHORT)
    }
  },
);

const ChapterResponseSlice = createSlice({
  name: 'chapterResponse',
  initialState: {
    data: null,
    status: null,
    continueData: null,
    popUpState: false,
    courseId: null,
    certificate: null,
  },
  reducers: {
    addChapterList: (state, action) => {
      state.data = null;
    },
    changeChapterListStatus: (state, action) => {
      state.data?.chapterResponses.map(item => {
        if (item?.chapterId == action.payload.id) {
          item.chapterStatus = !item.chapterStatus;
        }
      });
    },
    addContinueData: (state, action) => {
      state.continueData = null;
      state.continueData = action.payload;
    },

    setPopUpState: (state, action) => {
      state.popUpState = !state.popUpState;
    },
    addCertificate: (state, action) => {
      state.certificate = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(csChapterResponse.pending, (state, action) => {
        state.continueData = null;
        state.status = 'loading';
      })
      .addCase(csChapterResponse.fulfilled, (state, action) => {
        state.status = 'success';
        state.data = action.payload;
      })
      .addCase(csChapterResponse.rejected, (state, action) => {
        state.status = 'failed';
      });
  },
});

export const {
  addChapterList,
  changeChapterListStatus,
  addContinueData,
  setPopUpState,
  addCertificate,
} = ChapterResponseSlice.actions;

export default ChapterResponseSlice.reducer;
