// import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
// import axios from 'axios';

// export const OverView = createAsyncThunk(
//     'category/OverView',
//     async (token,id) => {
     
     
//       const options = {
//         headers:{
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         }
//       };
    
//       try {
//         const response = await axios.get(
//         `http://virtuallearn-env.eba-b8h9bw3u.ap-south-1.elasticbeanstalk.com/user/courseOverView/${id}`,
//           options,
//         );
//         console.log("----",response.data);
//         return response.data;
//       } catch (error) {
//         console.log("-()-",error);
//       }
//     },
//   );
  
//   const OverViewSlice = createSlice({
//     name: 'category',
//     initialState: {
//       data:null,
//       status: null,
//     },
//     extraReducers: (builder) => {
//       builder
//       .addCase(OverView.pending ,(state, action) => {
//         state.status = 'loading';
//       })
//       .addCase(OverView.fulfilled ,(state, action) => {
//         state.status = 'success';
//         state.data = action.payload;
//       })
//       .addCase(OverView.rejected, (state, action) => {
//         state.status = 'failed';
//       })
//     },
//   });
  
//   export default OverViewSlice.reducer;