import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact, updateContact } from './operations';
import customToast from '../../components/Toast/Toast';
import { logOut } from '../auth/operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  customToast('error', 'Oops... something went wrong, try again!');
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const initialState = {
  items: [],
  page: 1,
  totalPages: 1,
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        handleFulfilled(state);
        state.items = action.payload.data.data;
        state.totalPages = action.payload.data.totalPages;
        state.page = action.payload.data.page;

        if (action.payload.data.data.length === 0) {
          customToast('warn', 'No countacts added');
          return;
        }

        customToast('success', 'Countacts are loaded');
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        handleFulfilled(state);
        state.items.push(action.payload.data);
        customToast('success', `Contact added: ${action.payload.data.name}`);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        handleFulfilled(state);
        state.items = state.items.filter(item => item._id !== action.payload);
        customToast('success', 'Contact removed');
      })
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(logOut.fulfilled, state => {
        state.items = [];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        const updatedContact = action.payload.data;
        const index = state.items.findIndex(contact => contact._id === updatedContact._id);
        if (index !== -1) {
          state.items[index] = updatedContact;
        }
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
