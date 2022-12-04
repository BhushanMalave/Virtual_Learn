import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import Toast from 'react-native-simple-toast'


export const hsTopHeaders = createAsyncThunk(
  'topHeader/hsTopHeaders',
  async token => {
    const options = {
      headers:{
        Authorization: `Bearer ${token}`,
      }
    };
  
    try {
      const response = await axios.get(
        'http://virtuallearn-env.eba-b8h9bw3u.ap-south-1.elasticbeanstalk.com/user/home/course',
        options,       
        
      );
      return response.data;
    } catch (error) {
      console.log('hstophead',error);
      Toast.show('Something Went Wrong,Try Again!!!',Toast.SHORT)
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