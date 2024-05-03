// demandeAbsenceSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../api/axios";

export const DisplayDemande=createAsyncThunk('/demande-absence/displayDemande',
async()=>{
  try {
    const response=await axiosClient.get('http://localhost:8000/api/demande-absence');
    console.log(response)
    return Array.isArray(response.data) ? response.data : [];
  }catch(err){console.log(err)}

});

export const ShowbyCIN=createAsyncThunk('/demande-absence/displayDemande',
async(cin)=>{
    const response=await axiosClient.get(`http://localhost:8000/api/demande-absence/${cin}`);
    return   response.data  ;
});
export const DeleteDemande = createAsyncThunk(
  '/demande-absence/deleteDemande',
  async (cin) => {
     await axiosClient.delete(`http://localhost:8000/api/demande-absence/${cin}`);
    return cin;
  }
);

export const AddDemand = createAsyncThunk('/demande-absence/addDemand', async () => {
    const response = await axiosClient.post('http://localhost:8000/api/demande-absence');
    return response.data;
});



const initialState = {
    demandeAbsence: [],
  loading: false,
  error: null,
};

const demandAbsenceSlice = createSlice({
  name: "demandeAbsence",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AddDemand.pending, (state) => {
        state.loading = true;
      })
      .addCase(AddDemand.fulfilled, (state, action) => {
        state.loading = false;
        state.demandeAbsence = action.payload;
      })
      .addCase(AddDemand.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(DisplayDemande.pending,(state)=> {
        state.loading=true;
        })
        .addCase(DisplayDemande.fulfilled,(state,action)=>{
                state.loading=false;
                state.demandeAbsence=action.payload
        })
        .addCase(DisplayDemande.rejected,(state,action)=>{
                state.loading=false;
                state.error=action.error.message;
        })



        .addCase(DeleteDemande.fulfilled, (state, action) => {
          state.loading = false;
          state.demandeAbsence = state.demandeAbsence.filter(info => info.cin !== action.payload);
        })

  }
});

export default demandAbsenceSlice.reducer;
