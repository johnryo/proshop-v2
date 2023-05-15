import { apiSlice } from './apiSlice';
import {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useProfileMutation,
} from './usersApiSlice';
import {
  useGetProductsQuery,
  useGetProductDetailsQuery,
  useCreateProductMutation,
} from './productsApiSlice';
import {
  useCreateOrderMutation,
  useGetOrderDetailsQuery,
  usePayOrderMutation,
  useGetPayPalClientIdQuery,
  useGetMyOrdersQuery,
  useGetOrdersQuery,
  useDeliverOrderMutation,
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
  useProfileMutation,
  useGetProductsQuery,
  useGetProductDetailsQuery,
  useCreateProductMutation,
  useCreateOrderMutation,
  useGetOrderDetailsQuery,
  usePayOrderMutation,
  useGetPayPalClientIdQuery,
  useGetMyOrdersQuery,
  useGetOrdersQuery,
  useDeliverOrderMutation,
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
