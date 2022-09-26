// import { createReducer } from '@reduxjs/toolkit';
import { initialContacts } from './initialStateContacts';
// import { createContact, deleteContact } from '../../actions/contactsAction';

import { createSlice } from '@reduxjs/toolkit';

// export const contactsReducer = createReducer(initialContacts, {
//   [createContact]: (state, action) => [action.payload, ...state],
//   [deleteContact]: (state, action) => {
//     return state.filter(({ id }) => id !== action.payload);
//   },
// });

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {
    createContact: (state, action) => {
      state.unshift(action.payload);
    },
    deleteContact: (state, action) =>
      state.filter(contact => contact.id !== action.payload),
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { createContact, deleteContact } = contactsSlice.actions;
