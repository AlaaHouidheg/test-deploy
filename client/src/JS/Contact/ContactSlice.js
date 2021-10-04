import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//All the http request
export const getContacts = createAsyncThunk("contacts/getcontact", async () => {
  try {
    let response = await axios.get("http://localhost:5000/contacts");

    return await response;
  } catch (error) {
    console.log(error);
  }
});

export const deleteContacts = createAsyncThunk(
  "contacts/deletecontact",
  async (id) => {
    try {
      return await axios.delete(`http://localhost:5000/contacts/${id}`);
    } catch (error) {
      console.log(error);
    }
  }
);

export const addContacts = createAsyncThunk(
  "contacts/deletecontact",
  async (contact) => {
    try {
      return await axios.post(`http://localhost:5000/contacts`, contact);
    } catch (error) {
      console.log(error);
    }
  }
);
export const updateContacts = createAsyncThunk(
  "contacts/updatecontact",
  async ({ _id, edited }) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/contacts/${_id}`,
        edited
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);
const initialState = {
  contacts: [],
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  status: null,
  reducers: {},
  extraReducers: {
    [getContacts.pending]: (state, action) => {
      state.status = "loading";
    },
    [getContacts.fulfilled]: (state, action) => {
      state.contacts = action.payload.data.result;
      state.status = "success";
      console.log(action);
    },
    [getContacts.rejected]: (state, action) => {
      state.status = "failed";
    },
    [deleteContacts.pending]: (state, action) => {
      state.status = "loading";
    },
    [deleteContacts.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [deleteContacts.rejected]: (state, action) => {
      state.status = "failed";
    },
    [addContacts.pending]: (state, action) => {
      state.status = "loading";
    },
    [addContacts.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [addContacts.rejected]: (state, action) => {
      state.status = "failed";
    },
    [updateContacts.pending]: (state, action) => {
      state.status = "loading";
    },
    [updateContacts.fulfilled]: (state, action) => {
      console.log(action);
      state.status = "success";
    },
    [updateContacts.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

// Action creators are generated for each case reducer function
// export const {} = contactSlice.actions;

export default contactSlice.reducer;
