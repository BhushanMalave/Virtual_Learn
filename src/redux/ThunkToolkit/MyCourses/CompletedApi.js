import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const Completed = createAsyncThunk(
  'completedcourse/Completed',
  async token => {
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.get(
        'https://virtual-learning-app-java.herokuapp.com/user/completedCourses',
        options,
      );
      return response.data;
    } catch (error) {
      console.log('comp', error.response.data);
    }
  },
);

const CompletedSlice = createSlice({
  name: 'completedcourse',
  initialState: {
    data: null,
  },
  reducer: {
    setCompletedData: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(Completed.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(Completed.fulfilled, (state, action) => {
        state.status = 'success';
        state.data = action.payload;
      })
      .addCase(Completed.rejected, (state, action) => {
        state.status = 'failed';
      });
  },
});

export default CompletedSlice.reducer;
