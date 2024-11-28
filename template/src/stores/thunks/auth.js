import {createAsyncThunk} from '@reduxjs/toolkit';
import request from '@utils/request';
import { hideLoadingScreen, showLoadingScreen } from '@reducers/ui';

export const requestTest = createAsyncThunk(
    'auth/requestTest',
    async (requestData, {dispatch, getState, rejectWithValue}) => {
        try {
            dispatch(showLoadingScreen());
            const res = await request('request/testing', null, requestData);
            return res;
        } catch (error) {
            return rejectWithValue(error);
        } finally {
            dispatch(hideLoadingScreen());
        }
    }
);

// add more function thunk...