import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter } from '../filters/selectors';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    const normalizedFilter = filter?.toLowerCase() || '';

    return contacts.filter(
      contact =>
        contact?.name?.toLowerCase().includes(normalizedFilter) ||
        contact?.phoneNumber?.toLowerCase().includes(normalizedFilter)
    );
  }
);

export const selectPage = state => state.contacts.page;
export const selectTotalPages = state => state.contacts.totalPages;
