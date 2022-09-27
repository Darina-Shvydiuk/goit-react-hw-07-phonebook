import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getContacts,
  postContacts,
  deleteContacts,
} from '../../services/contactsApi';

export const getContactsThunk = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectWithValue }) => {
    try {
      return await getContacts();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const postContactsThunk = createAsyncThunk(
  'contacts/postContacts',
  async (body, { rejectWithValue }) => {
    try {
      return await postContacts(body);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, { rejectWithValue }) => {
    try {
      return await deleteContacts(id);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
