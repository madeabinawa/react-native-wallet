import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {IContact} from '@types';

export interface ContactState {
  isLoading: boolean;
  contacts: IContact[];
  errorMessage?: string;
}

const initialState: ContactState = {
  isLoading: false,
  contacts: [],
  errorMessage: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    getContactFetch: state => {
      state.isLoading = true;
    },
    getContactSuccess: (state, action: PayloadAction<IContact[]>) => {
      state.contacts = action.payload;
      state.isLoading = false;
    },
    getContactFailed: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload ?? '';
      state.isLoading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {getContactFetch, getContactSuccess, getContactFailed} =
  contactsSlice.actions;

export default contactsSlice.reducer;
