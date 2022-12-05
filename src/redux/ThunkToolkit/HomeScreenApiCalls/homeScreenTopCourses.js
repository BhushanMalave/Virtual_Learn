import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import Toast from 'react-native-simple-toast'

export const hsTopCourses = createAsyncThunk(
  'categories/hsTopCourses',
  async token => {
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.get(
        'http://virtuallearn-env.eba-b8h9bw3u.ap-south-1.elasticbeanstalk.com/user/home/course/category',
        options,
      );
      return response.data;
    } catch (error) {
      console.log('hstopcrs', error);
   
    }
  },
);

const HSTopCoursesSlice = createSlice({
  name: 'topCourses',
  initialState: {
    data: null,
    status: null,
  },
  extraReducers: builder => {
    builder
      .addCase(hsTopCourses.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(hsTopCourses.fulfilled, (state, action) => {
        state.status = 'success';
        state.data = action.payload;
      })
      .addCase(hsTopCourses.rejected, (state, action) => {
        state.status = 'failed';
      });
  },
});

export default HSTopCoursesSlice.reducer;
