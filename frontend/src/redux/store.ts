import { configureStore } from '@reduxjs/toolkit';
import { loginReducer } from 'src/redux/reducers/loginReducer';

export const store = configureStore({ reducer: loginReducer });
