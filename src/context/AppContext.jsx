import { createContext, useState } from 'react';

// Створюємо контекст
export const AppContext = createContext();

// Провайдер контексту
export const AppProvider = ({ children }) => {
    const [selectedUser, setSelectedUser] = useState(null);

    // Список користувачів
    const users = [
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

    return (
        <AppContext.Provider value={{ users, selectedUser, setSelectedUser }}>
            {children}
        </AppContext.Provider>
    );
};
