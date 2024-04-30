// fonctionnairesSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const displayFonctionnaire=createAsyncThunk('/fonctionnaire/displayFonctionnaire',
async()=>{
    const response=await axios.get('/api/fonctionnaire');
    return Array.isArray(response.data) ? response.data : [];
});


export const deleteFonctionnaire = createAsyncThunk(
  'fonctionnaire/deleteFonctionnaire',
  async (cin) => {
     await axios.delete(`/api/fonctionnaire/${cin}`);
    return cin;
  }
);

export const showDetailsByCin = createAsyncThunk(
  'fonctionnaire/showDetailsByCin',
  async (cin) => {
    const response = await axios.get(`/api/fonctionnaire/${cin}`);
    return response.data;
  }
);


const initialState = {
  fonctionnaires: [],
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
          state.fonctionnaires = state.fonctionnaires.filter(info => info.id !== action.payload);
        })

  }
});

export default fonctionnairesSlice.reducer;
