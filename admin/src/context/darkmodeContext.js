import { createContext, useState } from "react";
export const AuthContext = createContext(null);
export default function Context({ children }) {
  const [dark, setDark] = useState(false);
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider value={{ dark, setDark, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
