import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import UserProfile from './UserProfile';

const UserList = () => {
    // Отримуємо дані з контексту
    const { users, selectedUser, setSelectedUser } = useContext(AppContext);

    return (
        <div>
            <ul className="user-list">
                {users.map(user => (
                    <li key={user.id} onClick={() => setSelectedUser(user)}>
                        {user.name}
                    </li>
                ))}
            </ul>

            {selectedUser && <UserProfile />}
        </div>
    );
};

export default UserList;
