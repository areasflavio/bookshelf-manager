import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import { updateProfileFailure, updateProfileSuccess } from './actions';

export function* updateProfile({ payload }) {
  try {
    const response = yield call(api.put, 'users', payload.data);

    toast.success('Profile updated successfully!');

    yield put(updateProfileSuccess(response.data));
  } catch (error) {
    toast.error('Error updating profile, please check your data');
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
