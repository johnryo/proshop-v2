import { apiSlice } from './apiSlice';
import {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
} from './usersApiSlice';
import { setCredentials, logout } from './authSlice';
import { saveShippingAddress, savePaymentMethod } from './cartSlice';

export {
  apiSlice,
  useLoginMutation,
  useLogoutMutation,
  setCredentials,
  logout,
  useRegisterMutation,
  saveShippingAddress,
  savePaymentMethod,
};

export { default as cartSliceReducer } from './cartSlice';
export { default as authSliceReducer } from './authSlice';
