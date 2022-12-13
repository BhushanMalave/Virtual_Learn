import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
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
                `http://virtuallearn-env.eba-6xmym3vf.ap-south-1.elasticbeanstalk.com/user/allCoursesOfCategory?categoryId=${id}`,
                options,
            );
           
            return response.data;
        } catch (error) {
            console.log("allcrsofcat",error);
        }
    },
);

const AllCourseOfCategorySlice = createSlice({
    name:'allCourseOfCategory',
    initialState:{
        data:null,
        status:null,
    },
    reducer: {
        setAllCourseData: (state, action) => {
          state.data = action.payload;
        },
      },
    extraReducers: (builder) => {
        builder
        .addCase(cdsAllCourseOfCategory.pending ,(state, action) => {
          state.status = 'loading';
          state.data=null;
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

export const {setAllCourseData} = AllCourseOfCategorySlice.actions;
export default AllCourseOfCategorySlice.reducer;