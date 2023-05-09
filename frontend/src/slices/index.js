import { apiSlice } from './apiSlice';
import {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
} from './usersApiSlice';
import { setCredentials, logout } from './authSlice';

export {
  apiSlice,
  useLoginMutation,
  useLogoutMutation,
  setCredentials,
  logout,
  useRegisterMutation,
};

export { default as cartSliceReducer } from './cartSlice';
export { default as authSliceReducer } from './authSlice';
