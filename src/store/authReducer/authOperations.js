import { createAsyncThunk } from '@reduxjs/toolkit';
import { login, register } from 'service/authAPI';
import { token } from 'service/hosts';
import swal from 'sweetalert';

export const userRegister = createAsyncThunk(
  `user/userRegister`,
  async (credential, { rejectWithValue }) => {
    try {
      const response = await register(credential);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const userLogin = createAsyncThunk(
  `user/userLogin`,
  async (credential, { rejectWithValue }) => {
    try {
      const response = await login(credential);
      token.set(response.token);
      swal({
        title: 'Successful authorization!',
        text: `Hi, ${response.user.name}. Nice to meet you!`,
        icon: 'success',
        button: 'Continue!',
      });
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
