import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import Toast from 'react-native-simple-toast'

export const OnGoing = createAsyncThunk(
  'ongoingcourse/OnGoing',
  async token => {
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.get(
        'https://virtual-learning-app-java.herokuapp.com/user/ongoingCourses',
        options,
      );

      return response.data;
    } catch (error) {
      console.log('ongoing', error.response.data);
      Toast.show('Something Went Wrong,Try Again!!!',Toast.SHORT)
    }
  },
);

const OnGoingSlice = createSlice({
  name: 'ongoingcourse',
  initialState: {
    data: null,
  },
  reducer: {
    setOnGoingData: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(OnGoing.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(OnGoing.fulfilled, (state, action) => {
        state.status = 'success';
        state.data = action.payload;
      })
      .addCase(OnGoing.rejected, (state, action) => {
        state.status = 'failed';
      });
  },
});

export default OnGoingSlice.reducer;
