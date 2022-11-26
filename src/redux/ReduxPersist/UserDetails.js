import {createSlice} from '@reduxjs/toolkit';

const initialdata = {
   profilePhoto:null,
   fullName:null,
   userName:null,
   email:null,
   mobileNumber:null,
   occupation:null,
   gender:null,
   dateOfBirth:null,
   twitterLink:null,
   faceBookLink:null,
}

export const UserDetailsSlice = createSlice({
    name: 'userDetails',
    initialState: {
     token:null,
     newUser:true,
     userData:null,
    },
    reducers: {
      setToken: (state, action) => {
        console.log(action.payload);
        state.token = action.payload;
      },
      setUserData: (state,action) => {
        state.userData = action.payload;
      },
      setNewUser: (state,action) => {
        state.newUser = action.payload;
      }
    },
  });


export const {
    setToken,
    setUserData,
    setNewUser,
  } = UserDetailsSlice.actions;
  
  export default UserDetailsSlice.reducer;