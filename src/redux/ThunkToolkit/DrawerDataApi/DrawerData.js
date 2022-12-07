import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const drawerDataApiCall = createAsyncThunk(
  'drawerData/drawerDataApiCall',
  async token => {
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.get(
        'http://virtuallearn-env.eba-b8h9bw3u.ap-south-1.elasticbeanstalk.com/user/menu',
        options,
      );
      if (response.data) {
        return response.data;
      }
    } catch (error) {
      // console.log(error);
      Toast.show('Something Went Wrong,Try Again!!!', Toast.SHORT);
    }
  },
);

const drawerDataApiCallSlice = createSlice({
  name: 'drawerData',
  initialState: {
    data: null,
    status: null,
  },
  extraReducers: builder => {
    builder
      .addCase(drawerDataApiCall.pending, (state, action) => {
        state.status = 'loading';
        state.data = null;
      })
      .addCase(drawerDataApiCall.fulfilled, (state, action) => {
        state.status = 'success';
        state.data = action.payload;
      })
      .addCase(drawerDataApiCall.rejected, (state, action) => {
        state.status = 'failed';
      });
  },
});

export default drawerDataApiCallSlice.reducer;
