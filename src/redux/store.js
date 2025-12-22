import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './slices/usersSlice';

// Налаштовуємо та створюємо store
export const store = configureStore({
    reducer: {
        users: usersReducer
    }
});
