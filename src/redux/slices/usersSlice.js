import { createSlice } from '@reduxjs/toolkit';

// Початкові дані користувачів
const initialUsers = [
    {
        id: 1,
        name: 'Олександр Петренко',
        email: 'o.petrenko@example.com'
    },
    {
        id: 2,
        name: 'Марія Коваленко',
        email: 'm.kovalenko@example.com'
    },
    {
        id: 3,
        name: 'Іван Шевченко',
        email: 'i.shevchenko@example.com'
    }
];

// Початковий стан
const initialState = {
    users: initialUsers,
    selectedUser: null
};

// Створюємо slice
const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        // Дія для вибору користувача
        selectUser: (state, action) => {
            state.selectedUser = action.payload;
        },
        // Дія для скидання вибору
        clearSelectedUser: (state) => {
            state.selectedUser = null;
        }
    }
});

// Експортуємо дії
export const { selectUser, clearSelectedUser } = usersSlice.actions;

// Селектори для отримання даних зі стору
export const selectUsers = (state) => state.users.users;
export const selectSelectedUser = (state) => state.users.selectedUser;

// Експортуємо редюсер
export default usersSlice.reducer;
