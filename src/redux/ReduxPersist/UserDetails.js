import {createSlice} from '@reduxjs/toolkit';


export const UserDetailsSlice = createSlice({
    name: 'userDetails',
    initialState: {
     token:null,
    },
    reducers: {
      setToken: (state, action) => {
        console.log(action.payload);
        state.token = action.payload;
      },
    },
  });


export const {
    setToken
  } = UserDetailsSlice.actions;
  
  export default UserDetailsSlice.reducer;