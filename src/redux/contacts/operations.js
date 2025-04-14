import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async ({ page = 1, perPage = 10 }, thunkAPI) => {
    try {
      const response = await axios.get('/contacts', {
        params: { page, perPage },
      });

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk('contacts/addContact', async (formData, thunkAPI) => {
  try {
    const response = await axios.post('/contacts', formData);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ contactId, name, phoneNumber }, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${contactId}`, { name, phoneNumber });

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
