/** @format */

import axios from 'axios';
import {
  getSelfHelper,
  loginFailure,
  loginStart,
  loginSucess,
} from '../slices/userSlice';
import { AppDispatch } from '../index';

export const login = async (
  dispatch: AppDispatch,
  user: { email: string; password: string }
) => {
  dispatch(loginStart());
  try {
    const res = await axios.post('http://localhost:5000/api/v1/login', {
      email: user.email,
      password: user.password,
    });
    dispatch(loginSucess({ user: res.data.user, token: res.data.token }));
    return res;
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const getUserDetails = async (dispatch: AppDispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.get('http://localhost:5000/api/v1/getSelf', {
      withCredentials: true,
    });
    dispatch(getSelfHelper({ user: res.data.userDetails }));
    return res;
  } catch (error) {
    dispatch(loginFailure());
  }
};
