import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const myCourses = createAsyncThunk('courses/myCourses', async token => {
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.get(
      'https://virtual-learning-app-java.herokuapp.com/user/checkMyCourses',
      options,
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log('mycrs', error.response.data);
  }
});

const MyCoursesSlice = createSlice({
  name: 'courses',
  initialState: {
    status: null,
  },
  extraReducers: builder => {
    builder
      .addCase(myCourses.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(myCourses.fulfilled, (state, action) => {
        state.status = 'success';
        state.data = action.payload;
      })
      .addCase(myCourses.rejected, (state, action) => {
        state.status = 'failed';
      });
  },
});

export default MyCoursesSlice.reducer;
