import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'Api/ContactsApi';



export const fetchContacts = createAsyncThunk('contacts/fetch',
  async (_, thunkApi) => {
    try {
      const data = await api.getContacts();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const addContact  = createAsyncThunk('contacts/add',
    async (newContact, { rejectWithValue }) => {
        try {
            const data  = await api.addContacts(newContact)
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);

export const deleteContact = createAsyncThunk('contacts/delete',
    async (id, { rejectWithValue }) => {
        try {
            const data  = await api.deleteContacts(id)
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

