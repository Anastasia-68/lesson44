import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import UserList from "./UserList";

const MidChild = () => {
  const { users } = useContext(AppContext);

  return (
    <div className="mid-child">
      <h3>MidChild — уровень 2 (использует users.length)</h3>
      <p>Количество пользователей: <strong>{users.length}</strong></p>

      {/* уровень 3 */}
      <UserList />
    </div>
  );
};

export default MidChild;
