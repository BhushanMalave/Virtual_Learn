// import {createSlice} from '@reduxjs/toolkit';

// export const MyCourseSlice = createSlice({
//   name: 'MyCourse',
//   initialState: {
//     onGoing:[],
//     completed:[]
//   },
//   reducers: {
//     setOngoingState: (state, action) => {
//       state.state = action.payload;
//     },
//     setCompletedState: (state, action) => {
//       state.state = action.payload;
//     },
   
//   },
// });

// export const {setOngoingState,setCompletedState} = MyCourseSlice.actions;

// export default MyCourseSlice.reducer;

import {createSlice} from '@reduxjs/toolkit';

export const JoinCourseSlice = createSlice({
  name: 'JoinCourse',
  initialState: {
    courseId:null
  },
  reducers: {
    setJoinState: (state, action) => {
      state.courseId = action.payload;
    },
  
   
  },
});

export const {setJoinState} = MyCourseSlice.actions;

export default JoinCourseSlice.reducer;