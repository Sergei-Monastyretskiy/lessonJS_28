# Рефакторинг з Context API на Redux Toolkit

## Аналіз глобального стану

### Глобальні дані:
1. **`users`** - масив користувачів (статичні дані)
   - Тип: Array<{id: number, name: string, email: string}>
   - Ініціалізація: 3 користувачі
   
2. **`selectedUser`** - обраний користувач (змінний стан)
   - Тип: Object | null
   - Початкове значення: null

### Компоненти та їх взаємодія зі станом:

#### UserList
- **Читає:** `users`, `selectedUser`
- **Дії:** `setSelectedUser` (виклик при кліку на користувача)

#### UserProfile
- **Читає:** `selectedUser`
- **Дії:** немає

## Структура Redux

### Створена структура директорій:
```
src/
  redux/
    store.js          # Конфігурація Redux store
    slices/
      usersSlice.js   # Slice для управління користувачами
```

### usersSlice.js
**State:**
```javascript
{
  users: Array<User>,      // Список всіх користувачів
  selectedUser: User | null // Обраний користувач
}
```

**Actions (дії):**
- `selectUser(user)` - вибрати користувача
- `clearSelectedUser()` - скинути вибір користувача

**Selectors (селектори):**
- `selectUsers(state)` - отримати список користувачів
- `selectSelectedUser(state)` - отримати обраного користувача

### store.js
Налаштування Redux store за допомогою `configureStore` з Redux Toolkit:
```javascript
{
  reducer: {
    users: usersReducer
  }
}
```

## Зміни в компонентах

### main.jsx
**Було:**
```jsx
<AppProvider>
  <App />
</AppProvider>
```

**Стало:**
```jsx
<Provider store={store}>
  <App />
</Provider>
```

### UserList.jsx
**Було:**
- Використання `useContext(AppContext)`
- Прямий виклик `setSelectedUser`

**Стало:**
- Використання `useSelector` для читання стану
- Використання `useDispatch` для відправки дій
- Виклик `dispatch(selectUser(user))`

### UserProfile.jsx
**Було:**
- Використання `useContext(AppContext)`

**Стало:**
- Використання `useSelector(selectSelectedUser)`

## Переваги рефакторингу

1. **Передбачуваність:** Redux забезпечує односторонній потік даних
2. **Масштабованість:** Легко додавати нові slice та дії
3. **DevTools:** Можливість використання Redux DevTools для відлагодження
4. **Типобезпека:** Легше інтегрувати TypeScript
5. **Тестування:** Редюсери та селектори легко тестувати
6. **Middleware:** Можливість використання middleware для логування, async логіки тощо

## Перевірка роботи

Запустіть додаток:
```bash
npm run dev
```

Перевірте:
- ✅ Список користувачів відображається
- ✅ При кліку на користувача відображається профіль
- ✅ Профіль відображає правильні дані
- ✅ Немає помилок у консолі

## Видалені файли
- `src/context/AppContext.jsx` - замінено на Redux
- `src/context/` - директорія видалена

## Додані залежності
- `@reduxjs/toolkit` - Redux Toolkit
- `react-redux` - React bindings для Redux
