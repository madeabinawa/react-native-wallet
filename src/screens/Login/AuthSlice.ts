import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {IUser} from '@types';

export type GetUserFetchType = {
  username: string;
  password: string;
};

export interface AuthState {
  isAuth: boolean;
  isLoading: boolean;
  user: IUser;
  errorMessage?: string;
}

const initialState: AuthState = {
  isAuth: false,
  isLoading: false,
  user: {} as IUser,
  errorMessage: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest: (state, _action: PayloadAction<GetUserFetchType>) => {
      state.isLoading = true;
      state.errorMessage = '';
    },
    getUserSuccess: (state, action: PayloadAction<IUser>) => {
      state.isLoading = false;
      state.isAuth = true;
      state.user = action.payload;
    },
    getUserFailed: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.isAuth = false;
      state.errorMessage = action.payload ?? '';
    },
    logout: () => initialState,
  },
});

export const {loginRequest, getUserSuccess, getUserFailed, logout} =
  authSlice.actions;

export default authSlice.reducer;
