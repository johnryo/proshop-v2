import { apiSlice } from './apiSlice';
import {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
} from './usersApiSlice';
import {
  useGetProductsQuery,
  useGetProductDetailsQuery,
} from './productsApiSlice';
import {
  useCreateOrderMutation,
  useGetOrderDetailsQuery,
  usePayOrderMutation,
  useGetPayPalClientIdQuery,
} from './ordersApiSlice';
import { setCredentials, logout } from './authSlice';
import {
  addToCart,
  removeFromCart,
  saveShippingAddress,
  savePaymentMethod,
  clearCartItems,
} from './cartSlice';

export {
  apiSlice,
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useGetProductsQuery,
  useGetProductDetailsQuery,
  useCreateOrderMutation,
  useGetOrderDetailsQuery,
  usePayOrderMutation,
  useGetPayPalClientIdQuery,
  setCredentials,
  logout,
  addToCart,
  removeFromCart,
  saveShippingAddress,
  savePaymentMethod,
  clearCartItems,
};

export { default as cartSliceReducer } from './cartSlice';
export { default as authSliceReducer } from './authSlice';
