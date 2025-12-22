import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const UserProfile = () => {
    // Отримуємо дані з контексту
    const { selectedUser } = useContext(AppContext);

    return (
        <div className="user-profile">
            <h2>Профіль</h2>
            <p><strong>Ім'я:</strong> {selectedUser.name}</p>
            <p><strong>Email:</strong> {selectedUser.email}</p>
        </div>
    );
};

export default UserProfile;
