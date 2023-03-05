import { createSlice } from '@reduxjs/toolkit';
import { token } from 'service/hosts';
import { userLogin } from './authOperations';

const initialState = {
  token: null,
  userName: null,
  userEmail: null,
  authComplete: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    logOut(state) {
      state.token = null;
      state.userName = null;
      state.userEmail = null;
      state.authComplete = false;
      state.error = null;
      token.unSet();
    },
  },
  extraReducers: builder => {
    // ---- Log in ----
    builder
      .addCase(userLogin.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.userName = action.payload.user.name;
        state.userEmail = action.payload.user.email;
        state.token = action.payload.token;
        state.isLoading = false;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { logOut } = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;
