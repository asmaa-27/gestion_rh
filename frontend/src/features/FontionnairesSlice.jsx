// fonctionnairesSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../api/axios";

export const displayFonctionnaire=createAsyncThunk('/fonctionnaire/displayFonctionnaire',
async()=>{
  try {
    const response=await axiosClient.get('http://localhost:8000/api/fonctionnaire');
    console.log(response)
    return Array.isArray(response.data) ? response.data : [];
  }catch(err){console.log(err)}

});

export const fetchFonctionnaireCountByMonth = createAsyncThunk(
  'fonctionnaire/fetchFonctionnaireCountByMonth',
  async () => {
    try {
      const response = await axiosClient.get('http://localhost:8000/api/fonctionnaire/count-by-month');
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const deleteFonctionnaire = createAsyncThunk(
  'fonctionnaire/deleteFonctionnaire',
  async (cin) => {
     await axiosClient.delete(`/api/fonctionnaire/${cin}`);
    return cin;
  }
);

export const showDetailsByCin = createAsyncThunk(
  'fonctionnaire/showDetailsByCin',
    async (cin) => {
    try{
        const response = await axiosClient.get(`http://localhost:8000/api/fonctionnaire/${cin}`);
        console.log(response.data)
        return Array.isArray(response.data) ? response.data : {};
    }catch(err){console.log(err)}
  }
);


const initialState = {
  fonctionnaires: [],
    fonctionnaireCountByMonth: [],
  loading: false,
  error: null,
};

const fonctionnairesSlice = createSlice({
  name: "fonctionnaire",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(showDetailsByCin.pending, (state) => {
        state.loading = true;
      })
      .addCase(showDetailsByCin.fulfilled, (state, action) => {
        state.loading = false;
        state.fonctionnaires = action.payload;
      })
      .addCase(showDetailsByCin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchFonctionnaireCountByMonth.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFonctionnaireCountByMonth.fulfilled, (state, action) => {
        state.loading = false;
        state.fonctionnaireCountByMonth = action.payload;
      })
      .addCase(fetchFonctionnaireCountByMonth.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(displayFonctionnaire.pending,(state)=> {
        state.loading=true;
        })
        .addCase(displayFonctionnaire.fulfilled,(state,action)=>{
                state.loading=false;
                state.fonctionnaires=action.payload
        })
        .addCase(displayFonctionnaire.rejected,(state,action)=>{
                state.loading=false;
                state.error=action.error.message;
        })

        .addCase(deleteFonctionnaire.fulfilled, (state, action) => {
          state.loading = false;
          state.fonctionnaires = state.fonctionnaires.filter(info => info.cin !== action.payload);
        })

  }
});

export default fonctionnairesSlice.reducer;
