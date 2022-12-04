import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import Toast from 'react-native-simple-toast'

export const hsCategories = createAsyncThunk(
  'categories/hsCategories',
  async token => {
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.get(
        'http://virtuallearn-env.eba-b8h9bw3u.ap-south-1.elasticbeanstalk.com/user/categoriesWP',
        options,
      );

      return response.data;
    } catch (error) {
      console.log('hscat', error);
      Toast.show('Something Went Wrong,Try Again!!!',Toast.SHORT)
    }
  },
);

const HSCategoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    data: null,
    status: null,
  },
  extraReducers: builder => {
    builder
      .addCase(hsCategories.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(hsCategories.fulfilled, (state, action) => {
        state.status = 'success';
        state.data = action.payload;
      })
      .addCase(hsCategories.rejected, (state, action) => {
        state.status = 'failed';
      });
  },
});

export default HSCategoriesSlice.reducer;
