import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import { useSelector } from 'react-redux';

export const hsTopHeaders = createAsyncThunk(
  'topHeader/hsTopHeaders',
  async token => {
    // const token =useSelector(state=> state.userDetails.token);
    const options = {
      headers:{
        Authorization: `Bearer ${token}`,
      }
    };
  
    try {
      const response = await axios.get(
        'https://virtual-learn-app-java.herokuapp.com/user/home/course',
        options,
        
      );
      // console.log(response.data)
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const HSTopHeadersSlice = createSlice({
  name: 'topHeader',
  initialState: {
    value:null,
    status: null,
  },
  extraReducers: (builder) => {
    builder
    .addCase(hsTopHeaders.pending ,(state, action) => {
      state.status = 'loading';
    })
    .addCase(hsTopHeaders.fulfilled ,(state, action) => {
      state.status = 'success';
      state.value = action.payload;
    })
    .addCase(hsTopHeaders.rejected, (state, action) => {
      state.status = 'failed';
    })
  },
});

export default HSTopHeadersSlice.reducer;