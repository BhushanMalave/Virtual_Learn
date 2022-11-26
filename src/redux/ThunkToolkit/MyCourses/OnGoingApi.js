import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';


export const OnGoing = createAsyncThunk(
  'ongoingcourse/OnGoing',
  async token => {
 
    const options = {
      headers:{
        Authorization: `Bearer ${token}`,
      }
    };
  
    try {
      const response = await axios.get(
        'https://virtual-learn-app-java.herokuapp.com/user/ongoingCourses',
        options,
      );
    //   console.log(response.data)
      return response.data;
    } catch (error) {
     // console.log(error.response.data);
    }
  },
);

const OnGoingSlice = createSlice({
  name: 'ongoingcourse',
  initialState: {
    data:null,
  },
  reducer: {
    setOnGoingData: (state,action) => {
      state.data = action.payload;
    }
},
  extraReducers: (builder) => {
    builder
    .addCase(OnGoing.pending ,(state, action) => {
      state.status = 'loading';
    })
    .addCase(OnGoing.fulfilled ,(state, action) => {
      state.status = 'success';
      state.data = action.payload;
    })
    .addCase(OnGoing.rejected, (state, action) => {
      state.status = 'failed';
    })
  },
});

export default OnGoingSlice.reducer;