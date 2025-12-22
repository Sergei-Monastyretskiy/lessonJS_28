import { useSelector } from 'react-redux';
import { selectSelectedUser } from '../redux/slices/usersSlice';

const UserProfile = () => {
    // Отримуємо обраного користувача зі store
    const selectedUser = useSelector(selectSelectedUser);

    return (
        <div className="user-profile">
            <h2>Профіль</h2>
            <p><strong>Ім'я:</strong> {selectedUser.name}</p>
            <p><strong>Email:</strong> {selectedUser.email}</p>
        </div>
    );
};

export default UserProfile;
