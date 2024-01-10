import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { register, logIn, logOut, refreshUser } from '../operations';
import storage from 'redux-persist/lib/storage';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      });

    // [register.fulfilled](state, action) {
    //     state.user = action.payload.user;
    //     state.token = action.payload.token;
    //     state.isLoggedIn = true;
    //     state.error = null
    // },

    // [register.rejected](state, action) {
    //     state.error = action.payload;
    // },

    // [logIn.fulfilled](state, action) {
    //     state.user = action.payload.user;
    //     state.token = action.payload.token;
    //     state.isLoggedIn = true;
    //     state.error = null;
    // },

    // [logIn.rejected] (state, action) {
    //   state.error = action.payload;
    // },

    // [logOut.fulfilled](state) {
    //   state.user = { name: null, email: null };
    //   state.token = null;
    //   state.isLoggedIn = false;
    // },

    // [logOut.rejected](state, action) {
    //     state.error = action.payload;
    // },

    // [refreshUser.pending] (state) {
    //     state.isRefreshing = true;
    // },

    // [refreshUser.fulfilled](state, action) {
    //     state.user = action.payload;
    //     state.isLoggedIn = true;
    //     state.isRefreshing = false;
    // },

    // [refreshUser.rejected]( state) {
    //   state.isRefreshing = false;
    // },
  },
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};
export const extraReducers = persistReducer(persistConfig, authSlice.reducer);
export const authReducer = authSlice.reducer;
