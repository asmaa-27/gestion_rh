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


 
export const downloadPdf = createAsyncThunk('/demande-absence/downloadPdf', async (cin, { dispatch }) => {
  const response = await axiosClient.get(`http://localhost:8000/api/demande-absence/${cin}/pdf`, { responseType: 'blob' });
  const blobUrl = URL.createObjectURL(response.data); // Create a blob URL of the PDF
  dispatch(saveBlobAsFile({ blobUrl, filename: 'demande_absence.pdf' })); // Dispatch the saveBlobAsFile action
});


export const DeleteDemande = createAsyncThunk(
  '/demande-absence/deleteDemande',
  async (cin) => {
     await axiosClient.delete(`http://localhost:8000/api/demande-absence/${cin}`);
    return cin;
  }
);

export const AddemandeAbsence = createAsyncThunk('/AddemandeAbsence',async (data, { rejectWithValue }) => {
    try {
      const response = await axiosClient.post('http://localhost:8000/api/demande-absence', data,{
        headers:{
            'Content-Type':'multipart/form-data'
        }
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  });



const initialState = {
    demandeAbsence: [],
  loading: false,
  error: null,
  downloadedPdfUrl: null,
};

const demandAbsenceSlice = createSlice({
  name: "demandeAbsence",
  initialState,
  reducers: {
    saveBlobAsFile: (state, action) => {
      const { blobUrl, filename } = action.payload;
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = filename;
      link.click();
      URL.revokeObjectURL(blobUrl);
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(AddemandeAbsence.pending, (state) => {
        state.loading = true;
      })
      .addCase(AddemandeAbsence.fulfilled, (state, action) => {
        state.loading = false;
        state.demandeAbsence.push(action.payload);
      })
      .addCase(AddemandeAbsence.rejected, (state, action) => {
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
        .addCase(downloadPdf.pending, (state) => {
          state.loading = true;
        })
        .addCase(downloadPdf.fulfilled, (state, action) => {
          state.loading = false;
          // Assuming you want to store the downloaded PDF URL in the state
          state.downloadedPdfUrl = action.payload;
        })
        .addCase(downloadPdf.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
  }
});
export const { saveBlobAsFile } = demandAbsenceSlice.actions; // Export the new action

export default demandAbsenceSlice.reducer;
