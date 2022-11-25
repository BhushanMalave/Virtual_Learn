import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const cdsAdvanceCourse = createAsyncThunk(
    'advanceCourse/cdsAdvanceCourse',
    async ({token,id}) => {
        const options={
            headers:{
                Authorization:`Bearer ${token}`,
            }
        };
        try{
            const response = await axios.get(
                `https://virtual-learn-app-java.herokuapp.com/user/advanceCourses?categoryId=${id}`,
                options,
            );
           
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },
);

const AdvanceCourseSlice = createSlice({
    name:'advanceCourse',
    initialState:{
        data:null,
        status:null,
    },
    extraReducers: (builder) => {
        builder
        .addCase(cdsAdvanceCourse.pending ,(state, action) => {
          state.status = 'loading';
        })
        .addCase(cdsAdvanceCourse.fulfilled ,(state, action) => {
          state.status = 'success';
          state.data = action.payload;
        })
        .addCase(cdsAdvanceCourse.rejected, (state, action) => {
          state.status = 'failed';
        })
      },
})

export default AdvanceCourseSlice.reducer;