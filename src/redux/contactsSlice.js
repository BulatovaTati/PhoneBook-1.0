import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  },
  reducers: {
    addContact: (state, { payload: { name, number } }) => {
      if (state.items.some(el => el.name === name)) {
        iziToast.warning({
          position: 'topRight',
          title: 'Wow',
          message: `${name} is already in your contacts`,
        });
        return;
      }

      state.items.push({
        id: nanoid(6),
        name,
        number,
      });
    },

    deleteContact: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      iziToast.info({
        position: 'topRight',
        title: 'OK',
        message: `Contact removed`,
      });
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

export const { addContact, deleteContact } = contactsSlice.actions;

export const selectContacts = state => state.contacts.items;

export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);
