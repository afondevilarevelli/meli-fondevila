import React from "react";
import { IUser } from "@/models/user";

type TAuthContext = {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
};

export const AuthContext = React.createContext<TAuthContext | null>(null);

const AuthProvider = ({ children }: any) => {
  const [user, setUser] = React.useState<IUser | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
