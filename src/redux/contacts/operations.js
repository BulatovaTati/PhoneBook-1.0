import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async ({ page = 1, perPage = 10 }, thunkAPI) => {
    const accessToken = thunkAPI.getState().auth.accessToken;

    try {
      const response = await axios.get('/contacts', {
        params: { page, perPage },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response?.data?.message);
    }
  }
);

export const addContact = createAsyncThunk('contacts/addContact', async (formData, thunkAPI) => {
  const accessToken = thunkAPI.getState().auth.accessToken;

  try {
    const response = await axios.post('/contacts', formData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    const accessToken = thunkAPI.getState().auth.accessToken;

    try {
      await axios.delete(`/contacts/${contactId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ contactId, name, phoneNumber }, thunkAPI) => {
    const accessToken = thunkAPI.getState().auth.accessToken;

    try {
      const response = await axios.patch(
        `/contacts/${contactId}`,
        { name, phoneNumber },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
