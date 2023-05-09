import { apiSlice } from './apiSlice';
import {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
} from './usersApiSlice';
import { setCredentials, logout } from './authSlice';
import { saveShippingAddress } from './cartSlice';

export {
  apiSlice,
  useLoginMutation,
  useLogoutMutation,
  setCredentials,
  logout,
  useRegisterMutation,
  saveShippingAddress,
};

export { default as cartSliceReducer } from './cartSlice';
export { default as authSliceReducer } from './authSlice';
