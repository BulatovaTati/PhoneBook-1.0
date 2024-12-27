import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOps';
import customToast from '../components/Toast/Toast';

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

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        handleFulfilled(state);
        state.items = action.payload;
        customToast('success', 'Countacts are loaded');
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        handleFulfilled(state);
        state.items.push(action.payload);
        customToast('success', `Contact added: ${action.payload.name}`);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        handleFulfilled(state);
        state.items = state.items.filter(item => item.id !== action.payload);
        customToast('success', 'Contact removed');
      })
      .addCase(deleteContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
