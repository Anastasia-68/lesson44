import React, { useContext, useCallback } from "react";
import { AppContext } from "../context/AppContext";

const UserList = React.memo(() => {
  const { users, addUser } = useContext(AppContext);

  // используем useCallback для обработчика 
  const handleAdd = useCallback(() => {
    const name = prompt("Имя нового пользователя:", "New user");
    if (!name) return;
    addUser({ name, bio: "New member" });
  }, [addUser]);

  return (
    <div className="user-list">
      <h4>UserList — уровень 3 (читает users и вызывает addUser)</h4>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            <strong>{u.name}</strong> — <em>{u.bio}</em>
          </li>
        ))}
      </ul>
      <button onClick={handleAdd}>Добавить пользователя</button>
    </div>
  );
});

export default UserList;
