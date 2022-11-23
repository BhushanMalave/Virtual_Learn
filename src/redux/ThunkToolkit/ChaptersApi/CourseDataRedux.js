import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';


const Chapter = {
  chapterNum: 7,
  lessonNum: 46,
  assignmentNum: 6,
  totalLength: 3.5,
  enrolled: false,
  courseCompletedStatus: false,

  chapterList: [
    {
      id: 1,
      number: 1,
      name: 'Introduction to the course',
      status: true,
      completed: true,
      disabled: true,
      lessons: [
        {
          id: 1,
          number: 1,
          name: 'Introduction',
          duration: 0.34,
          completed: true,
          status: true,
        },
        {
          id: 2,
          number: 2,
          name: 'Using the Exercise Files',
          duration: 1.06,
          completed: true,
          status: true,
        },
      ],
    },
    {
      id: 2,
      number: 2,
      name: 'Learning the Figma Interface',
      status: false,
      completed: false,
      disabled: true,
      lessons: [
        {
          id: 1,
          number: 1,
          name: 'Introduction',
          duration: 0.34,
          completed: true,
          status: true,
        },
        {
          id: 2,
          number: 2,
          name: 'Using the Exercise Files',
          duration: 1.06,
          completed: true,
          status: true,
        },
      ],
      modularTest: {
        id: 1,
        name: 'Modular Test 2',
        duration: '10',
        questions: 25,
        rate: 10,
      },
    },
    {
      id: 3,
      number: 3,
      name: 'Setting up a new project',
      completed: false,
      status: false,
      disabled: true,
      lessons: [
        {
          id: 1,
          number: 1,
          name: 'Introduction',
          duration: 0.34,
          completed: true,
          status: true,
        },
        {
          id: 2,
          number: 2,
          name: 'Using the Exercise Files',
          duration: 1.06,
          completed: true,
          status: true,
        },
      ],
      modularTest: {
        id: 1,
        name: 'Modular Test 2',
        duration: '10',
        questions: 25,
        rate: 10,
      },
    },
    {
      id: 4,
      number: 4,
      name: 'Adding and Editing Content',
      status: false,
      completed: false,
      disabled: true,
      lessons: [
        {
          id: 1,
          number: 1,
          name: 'Introduction',
          duration: 0.34,
          completed: false,
          status: false,
        },
        {
          id: 2,
          number: 2,
          name: 'Using the Exercise Files',
          duration: 1.06,
          completed: false,
          status: false,
        },
      ],
      modularTest: {
        id: 1,
        name: 'Modular Test 2',
        duration: '10',
        questions: 25,
        rate: 10,
      },
    },
    {
      id: 5,
      number: 5,
      name: 'Completing the Design',
      status: false,
      completed: false,
      lessons: [
        {
          id: 1,
          number: 1,
          name: 'Introduction',
          duration: 0.34,
          completed: false,
          status: false,
        },
        {
          id: 2,
          number: 2,
          name: 'Using the Exercise Files',
          duration: 1.06,
          completed: false,
          status: false,
        },
      ],
      modularTest: {
        id: 1,
        name: 'Modular Test 2',
        duration: '10',
        questions: 25,
        rate: 10,
      },
    },
    {
      id: 6,
      number: 6,
      name: 'Prototyping, Sharing and Exporting',
      status: false,
      completed: false,
      lessons: [
        {
          id: 1,
          number: 1,
          name: 'Introduction',
          duration: 0.34,
          completed: false,
          status: false,
        },
        {
          id: 2,
          number: 2,
          name: 'Using the Exercise Files',
          duration: 1.06,
          completed: false,
          status: false,
        },
      ],
      modularTest: {
        id: 1,
        name: 'Modular Test 2',
        duration: '10',
        questions: 25,
        rate: 10,
      },
    },
    {
      id: 7,
      number: 7,
      name: 'Conclusion',
      status: false,
      completed: false,
      lessons: [
        {
          id: 1,
          number: 1,
          name: 'Introduction',
          duration: 0.34,
          completed: false,
          status: false,
        },
        {
          id: 2,
          number: 2,
          name: 'Using the Exercise Files',
          duration: 1.06,
          completed: false,
          status: false,
        },
      ],
      modularTest: {
        id: 1,
        name: 'Modular Test 2',
        duration: '10',
        questions: 25,
        rate: 10,
      },
    },
  ],
};
export const CourseDataSlice = createSlice({
  name: 'courseData',
  initialState: {
    data: Chapter,
    overview:[],
  },
  reducers: {
    changeChapterListStatus: (state, action) => {
      state.data.chapterList.map(item => {
        if (item.id == action.payload.id) {
          console.log(action.payload.id);
          item.status = !item.status;
        }
      });
    },

    addPlayStatus: (state, action) => {
      state.data.chapterList.map(item => {
        item.lessons.map(item => {
          if (item.id == action.payload.id) {
            item.status = true;
          }
        });
      });
    },

    addOverView:(state,action)=>{
      console.log("\\\\\\\\",action.payload)
      state.overview = action.payload;
    }

  },
});

export const {changeChapterListStatus, addPlayStatus,addOverView} =
CourseDataSlice.actions;

export default  CourseDataSlice.reducer;
