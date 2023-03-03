import { createSlice } from '@reduxjs/toolkit';
import { addContact, getContacts, removeContact } from './contactsOperations';

export const contactsSlice = createSlice({
  
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder =>
    builder

      // ---- GET ----

      .addCase(getContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(getContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(getContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // ---- DELETE ----

      .addCase(removeContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(removeContact.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.items = state.items.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(removeContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // ---- POST ----

      .addCase(addContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.items = [...state.items, action.payload];
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

const contactsReducer = contactsSlice.reducer;
export default contactsReducer;
