import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { addUserAction, fetchUsers, removeUser } from "../features/users/userAction";
import { IUser } from "../features/users/userTypes";

const UserList: React.FC = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    fetchUsers()(dispatch);
  }, [dispatch]);

  const handdleAddUser = () => {
    if (!value) {
      alert("Введите значение!");
      return;
    }
    const user: IUser = {
      id: Date.now(),
      name: value
    };
    dispatch(addUserAction(user));
    setValue("");
  };

  const handdleRemoveUser = (id: number) => {
    dispatch(removeUser(id));
  };

  if (loading) return <h2>Loading...</h2>;

  return (
    <div>
      <h2>List of users</h2>
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder="Введите имя..."
      />
      <button onClick={handdleAddUser}>Добавить</button>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => handdleRemoveUser(user.id)}
            style={{ fontSize: 20 }}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
