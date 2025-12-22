import { useSelector, useDispatch } from 'react-redux';
import { selectUsers, selectSelectedUser, selectUser } from '../redux/slices/usersSlice';
import UserProfile from './UserProfile';

const UserList = () => {
    // Отримуємо дані зі store через селектори
    const users = useSelector(selectUsers);
    const selectedUser = useSelector(selectSelectedUser);

    // Отримуємо dispatch для виклику дій
    const dispatch = useDispatch();

    const handleUserClick = (user) => {
        dispatch(selectUser(user));
    };

    return (
        <div>
            <ul className="user-list">
                {users.map(user => (
                    <li key={user.id} onClick={() => handleUserClick(user)}>
                        {user.name}
                    </li>
                ))}
            </ul>

            {selectedUser && <UserProfile />}
        </div>
    );
};

export default UserList;
