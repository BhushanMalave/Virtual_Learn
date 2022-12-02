import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import Toast from 'react-native-simple-toast'

export const cdsAllCourseOfCategory = createAsyncThunk(
    'allCourseOfCategory/cdsAllCourseOfCategory',
    async ({token,id}) => {
        const options={
            headers:{
                Authorization:`Bearer ${token}`,
            }
        };
        try{
            const response = await axios.get(
                `https://virtual-learning-app-java.herokuapp.com/user/allCoursesOfCategory?categoryId=${id}`,
                options,
            );
           
            return response.data;
        } catch (error) {
            console.log("allcrsofcat",error);
            Toast.show('Something Went Wrong,Try Again!!!',Toast.SHORT)
        }
    },
);

const AllCourseOfCategorySlice = createSlice({
    name:'allCourseOfCategory',
    initialState:{
        data:null,
        status:null,
    },
    extraReducers: (builder) => {
        builder
        .addCase(cdsAllCourseOfCategory.pending ,(state, action) => {
          state.status = 'loading';
        })
        .addCase(cdsAllCourseOfCategory.fulfilled ,(state, action) => {
          state.status = 'success';
          state.data = action.payload;
        })
        .addCase(cdsAllCourseOfCategory.rejected, (state, action) => {
          state.status = 'failed';
        })
      },
})

export default AllCourseOfCategorySlice.reducer;