import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import Toast from 'react-native-simple-toast'

export const cdsbasicCourse = createAsyncThunk(
  'basicCourse/cdsbasicCourse',
  async ({token, id}) => {
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await axios.get(
        `https://virtual-learning-app-java.herokuapp.com/user/basicCourses?categoryId=${id}`,
        options,
      );

      return response.data;
    } catch (error) {
      console.log('bsccrs', error);

    }
  },
);

const BasicCourseSlice = createSlice({
  name: 'basicCourse',
  initialState: {
    data: null,
    status: null,
  },
  extraReducers: builder => {
    builder
      .addCase(cdsbasicCourse.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(cdsbasicCourse.fulfilled, (state, action) => {
        state.status = 'success';
        state.data = action.payload;
      })
      .addCase(cdsbasicCourse.rejected, (state, action) => {
        state.status = 'failed';
      });
  },
});

export default BasicCourseSlice.reducer;
