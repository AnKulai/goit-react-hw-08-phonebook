import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchContacts,
  deleteContact,
  postContact,
} from './../../service/contactsAPI';

export const getContacts = createAsyncThunk(
  'contacts/getAllContacts',
  async (_, thunkAPI) => {
    try {
      // const contacts = await fetchContacts();
      const contacts = await fetchContacts();
      return contacts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async (id, thunkAPI) => {
    try {
      // const removedContact = await removeContactById(id);
      const removedContact = await deleteContact(id);
      return removedContact;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      // const newContact = await postContact(contact);
      const newContact = await postContact(contact);
      return newContact;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
