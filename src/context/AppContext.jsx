import React, { createContext, useState } from "react";

const defaultUsers = [
  { id: 1, name: "Alice", bio: "Frontend dev" },
  { id: 2, name: "Bob", bio: "Backend dev" }
];

export const AppContext = createContext({
  users: defaultUsers,
  theme: "light",
  toggleTheme: () => {},
  addUser: () => {}
});

export const AppProvider = ({ children }) => {
  const [users, setUsers] = useState(defaultUsers);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  const addUser = (user) => {
    const newUser = { id: Date.now(), ...user };
    setUsers((prev) => [...prev, newUser]);
  };

  const value = {
    users,
    theme,
    toggleTheme,
    addUser
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
