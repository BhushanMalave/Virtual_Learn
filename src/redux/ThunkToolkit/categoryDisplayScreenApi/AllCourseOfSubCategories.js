import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
export const cdsAllCourseOfSubCategory = createAsyncThunk(
    'allCourseOfSubCategory/cdsAllCourseOfSubCategory',
    async ({token,id}) => {
        const options={
            headers:{
                Authorization:`Bearer ${token}`,
            }
        };
        try{
            const response = await axios.get(
                `http://virtuallearn-env.eba-6xmym3vf.ap-south-1.elasticbeanstalk.com/user/allCoursesOfSubCategory?subCategoryId=${id}`,
                options,
            );
           
            return response.data;
        } catch (error) {
            console.log("allcrsofsubcat",error);
        }
    },
);

const AllCourseOfSubCategorySlice = createSlice({
    name:'allCourseOfSubCategory',
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
        .addCase(cdsAllCourseOfSubCategory.pending ,(state, action) => {
          state.status = 'loading';
          state.data=null;
        })
        .addCase(cdsAllCourseOfSubCategory.fulfilled ,(state, action) => {
          state.status = 'success';
          state.data = action.payload;
        })
        .addCase(cdsAllCourseOfSubCategory.rejected, (state, action) => {
          state.status = 'failed';
        })
      },
})

export const {setAllCourseData} = AllCourseOfSubCategorySlice.actions;
export default AllCourseOfSubCategorySlice.reducer;