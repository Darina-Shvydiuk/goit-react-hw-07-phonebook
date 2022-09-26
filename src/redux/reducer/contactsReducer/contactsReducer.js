import { createReducer } from '@reduxjs/toolkit';
import { initialContacts } from '../contactsReducer/initialStateContacts';
import { createContact, deleteContact } from '../../actions/contactsAction';

export const contactsReducer = createReducer(initialContacts, {
  [createContact]: (state, action) => [action.payload, ...state],
  [deleteContact]: (state, action) => {
    return state.filter(({ id }) => id !== action.payload);
  },
});
